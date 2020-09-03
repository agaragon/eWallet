import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import initialState from "./initialState";
async function getUrl(req) {
  let response = await fetch(req);
  let articles = response.json().articles;
  return articles;
}

function* getUsersData(action) {
  const user = {
    name: "André Guimarães Aragon",
    cpf: "094.991.069-43",
    balance: 500.0,
    toAccount: "18960-0",
    toAgency: "01",
  };
  const transactions = [];
  const payments = [];
  yield put({
    type: "GET_USER_INFO",
    user: user,
    transactions: initialState.transactions,
    payments: initialState.payments,
  });
}
function* registerUser(action) {
  console.log("SMS Sent");
}
function* accessBill(action) {
  let bill = {
    value: 400,
    dueDate: new Date(),
    codeBar: action.codeBar,
  };
  yield put({
    type: "CREATE_BILL",
    bill: bill,
    typeOfTransaction: "Pagamento",
  });
}
function* payBill(action) {
  yield put({
    type: "PAY_BILL",
    amount: action.amount,
    date: action.date,
    typeOfTransaction: "Pagamento",
    codeBar: action.codeBar,
  });
}
function* checkSMS(action) {
  console.log(`Message Checked your input was ${action.input}`);
}
function* makeDeposit(action) {
  yield all([
    put({ type: "MAKE_DEPOSIT", amount: action.amount }),
    put({
      type: "ADD_TRANSACTION_INFO",
      amount: parseFloat(action.amount),
      account: action.account,
      date: action.date,
      agency: action.agency,
      typeOfTransaction: "Depósito",
    }),
  ]);
}
function* transferMoney(action) {
  yield all([
    put({ type: "MONEY_TRANSFERED", amount: parseFloat(action.amount) }),
    put({
      type: "ADD_TRANSACTION_INFO",
      amount: parseFloat(action.amount),
      account: action.account,
      date: action.date,
      agency: action.agency,
      typeOfTransaction: "Transferência",
    }),
  ]);
}
function* makeQuery(action) {
  console.log(
    `You got the new info from day ${action.startDate} to ${action.finalDate}`
  );
  let setOfTransactions = { transactions: initialState.transactions };
  let setOfPayments = { payments: initialState.payments };
  let transactions = [];
  let payments = [];
  let i;
  let transaction;
  let payment;

  for (i = 0; i < setOfTransactions.transactions.length; i++) {
    transaction = setOfTransactions.transactions[i];
    if (
      transaction.date > action.startDate &&
      transaction.date < action.finalDate
    ) {
      transactions.push(transaction);
    }
  }
  for (i = 0; i < setOfPayments.payments.length; i++) {
    payment = setOfPayments.payments[i];
    if (payment.date > action.startDate && payment.date < action.finalDate) {
      payments.push(payment);
    }
  }
  yield put({ type: "SAVE_BILL_INFO", transactions, payments });
}

export function* sagaFetchUser() {
  yield takeLatest("LOGIN", getUsersData);
}

export function* sagaRegistration() {
  yield takeLatest("SEND_SMS", registerUser);
}
export function* sagaSMSCheck() {
  yield takeLatest("CHECK_SMS", checkSMS);
}
export function* sagaMakeQuery() {
  yield takeLatest("BILL_QUERY", makeQuery);
}
export function* sagaMoneyTransfer() {
  yield takeLatest("TRANSFER_MONEY", transferMoney);
}
export function* sagaMakeDeposit() {
  yield takeLatest("SAGA_MAKE_DEPOSIT", makeDeposit);
}
export function* sagaAccessBill() {
  yield takeLatest("SAGA_ACCESS_BILL", accessBill);
}
export function* sagaPayBill() {
  yield takeLatest("SAGA_PAY_BILL", payBill);
}

import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";

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
    transactions: transactions,
    payments: payments,
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
    typeOfTransaction: "Payment",
  });
}
function* payBill(action) {
  yield put({
    type: "PAY_BILL",
    amount: action.amount,
    date: action.date,
    typeOfTransaction: "Payment",
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
  console.log(`You got the new info from day ${action.date}`);
  let bill = {
    date: "00-00-00",
    transactions: [
      {
        time: "00-00-0000",
        value: 456556.0,
        toAccount: "18650-0",
        toAgency: "1",
      },
      { time: "00-00-0000", value: 456.0, toAccount: "11234-5", toAgency: "1" },
      {
        time: "00-00-0000",
        value: 123456.0,
        toAccount: "14829-4",
        toAgency: "1",
      },
    ],
  };
  yield put({ type: "SAVE_BILL_INFO", bill });
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

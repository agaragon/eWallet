import initialState from "./initialState";

export default function reducer(state = initialState, action) {
  let newPayment;
  let newPayments;
  let newUser;
  let newTransactions;
  let moreInfo;
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        ...state,
        transactions: action.transactions,
        payments: action.payments,
        user: action.user,
      };
    case "SAVE_BILL_INFO":
      return {
        ...state,
        transactions: action.transactions,
        payments: action.payments,
      };
    case "MORE_INFO":
      moreInfo = {
        value: action.value,
        date: action.date,
        codeBar: action.codeBar,
        typeOfTransaction: action.typeOfTransaction,
        toAgency: action.toAgency,
        toAccount: action.toAccount,
      };
      return {
        ...state,
        moreInfo: moreInfo,
      };
    case "CREATE_BILL":
      return {
        ...state,
        bill: action.bill,
      };
    case "PAY_BILL":
      newPayments = [...state.payments];
      newPayment = {
        date: action.date,
        amount: action.amount,
        typeOfTransaction: action.typeOfTransaction,
        codeBar: action.codeBar,
      };
      newPayments.push(newPayment);
      newUser = { ...state.user };
      newUser.balance =
        parseFloat(state.user.balance) - parseFloat(action.amount);
      return {
        ...state,
        user: { ...newUser },
        payments: newPayments,
      };
    case "CHANGE_DEPOSIT_VALUE":
      return {
        ...state,
        amount: action.amount,
      };
    case "MONEY_TRANSFERED":
      newUser = { ...state.user };
      newUser.balance =
        parseFloat(state.user.balance) - parseFloat(action.amount);
      return {
        ...state,
        user: { ...newUser },
      };
    case "MAKE_DEPOSIT":
      newUser = { ...state.user };
      console.log(`The user before the deposit had ${state.user.balance}`);
      newUser.balance =
        parseFloat(state.user.balance) + parseFloat(action.amount);
      console.log(`The user after the depoist has ${newUser.balance}`);
      return {
        ...state,
        user: { ...newUser },
      };
    case "ADD_TRANSACTION_INFO":
      newTransactions = [...state.transactions];
      newTransactions.push({
        date: action.date,
        value: action.amount,
        toAccount: action.account,
        toAgency: action.agency,
        typeOfTransaction: action.typeOfTransaction,
      });
      return {
        ...state,
        transactions: newTransactions,
      };
    default:
      return state;
  }
}

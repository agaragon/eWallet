const initialState = {
  depositValue: 0,
  user: {
    name: "",
    cpf: "",
    balance: 0,
  },
  bill: {
    date: "00-00-00",
    transactions: [
      {
        time: "00-00-0000",
        value: 456556.0,
        toAccount: "18650-0",
        toAgency: "1",
      },
      { time: "00-00-0000", value: 456.0, toAccount: "11234-5", toAgency: "2" },
      {
        time: "00-00-0000",
        value: 123456.0,
        toAccount: "14829-4",
        toAgency: "3",
      },
    ],
  },
  transactions: [],
};

export default function reducer(state = initialState, action) {
  let newUser;
  let newTransactions;
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        ...state,
        transactions: action.transactions,
        user: action.user,
      };
    case "SAVE_BILL_INFO":
      return {
        ...state,
        bill: action.bill,
      };
    case "CHANGE_DEPOSIT_VALUE":
      return {
        ...state,
        amount: action.amount,
      };
    case "MONEY_TRANSFERED":
      newUser = { ...state.user };
      // console.log(`The user before the transfer had ${state.user.balance}`);
      newUser.balance =
        parseFloat(state.user.balance) - parseFloat(action.amount);
      // console.log(`The user after the transfer had ${newUser.balance}`);
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

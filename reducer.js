const initialState = {
  user: {
    name: "André Aragon",
    cpf: "094.991.069-44",
    balance: "-2350,25",
  },
  bill: {
    date: "00-00-00",
    transactions: [
      { time: "00-00-0000", value: 456556.0, toAccount: "18650-0" },
      { time: "00-00-0000", value: 456.0, toAccount: "11234-5" },
      { time: "00-00-0000", value: 123456.0, toAccount: "14829-4" },
    ],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.user,
      };
    case "SAVE_BILL_INFO":
      return {
        ...state,
        bill: action.bill,
      };
    case "ACTION_3":
    case "ACTION_4":
    default:
      return state;
  }
}

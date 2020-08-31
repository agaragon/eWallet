const initialState = {
  user: {
    name: "André Aragon",
    cpf: "094.991.069-44",
    balance: "-2350,25",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        ...state,
        user: action.user,
      };
    case "ACTION_2":
    case "ACTION_3":
    case "ACTION_4":
    default:
      return state;
  }
}

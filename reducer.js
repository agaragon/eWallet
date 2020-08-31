const initialState = {
  user: {
    name: "",
    cpf: "",
    balance: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
    case "ACTION_2":
    case "ACTION_3":
    case "ACTION_4":
    default:
      return state;
  }
}

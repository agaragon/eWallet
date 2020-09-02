export default initialState = {
  depositValue: 0,
  user: {
    name: "",
    cpf: "",
    balance: 0,
  },
  bill: {
    dueDate: new Date(),
    value: 500,
  },
  transactions: [
    {
      date: new Date("2020-06-28"),
      value: 800.56,
      toAccount: 186503,
      toAgency: 1,
      typeOfTransaction: "Depósito",
    },
    {
      date: new Date("2020-05-03"),
      value: 560.56,
      toAccount: 986503,
      toAgency: 86,
      typeOfTransaction: "Transferência",
    },
    {
      date: new Date("2020-05-13"),
      value: 150.56,
      toAccount: 9503,
      toAgency: 36,
      typeOfTransaction: "Depósito",
    },
    {
      date: new Date("2020-06-18"),
      value: 800.3,
      toAccount: 9503,
      toAgency: 36,
      typeOfTransaction: "Depósito",
    },
    {
      date: new Date("2020-03-20"),
      value: 25.0,
      toAccount: 9503,
      toAgency: 36,
      typeOfTransaction: "Depósito",
    },
    {
      date: new Date("2020-01-12"),
      value: 25.0,
      toAccount: 9503,
      toAgency: 36,
      typeOfTransaction: "Depósito",
    },
    {
      date: new Date("2020-06-18"),
      value: 25.0,
      toAccount: 9503,
      toAgency: 36,
      typeOfTransaction: "Depósito",
    },
  ],
  moreInfo: {
    date: new Date(),
    amount: 15,
    typeOfTransaction: "Pagamento",
    codeBar: "73618726 38948133 0 487277 000001",
  },
  payments: [
    {
      date: new Date(),
      amount: 15,
      typeOfTransaction: "Pagamento",
      codeBar: "73618726 38948133 0 487277 000001",
    },
    {
      date: new Date(),
      amount: 200,
      typeOfTransaction: "Pagamento",
      codeBar: "726387472 39584953 1 485457 023401",
    },
    {
      date: new Date(),
      amount: 700,
      typeOfTransaction: "Pagamento",
      codeBar: "364842930 13526153 8 42939301 9984312",
    },
  ],
};

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

async function getUrl(req) {
  let response = await fetch(req);
  let articles = response.json().articles;
  return articles;
}

function* getUsersData(action) {
  //   let user = authenticate({ login: action.userName, userPassword: action.userPassword });
  const user = {
    name: "André Guimarães Aragon",
    cpf: "094.991.069-43",
    balance: -124121234123.25,
  };
  yield put({ type: "GET_USER_INFO", user: user });
}
function* registerUser(action) {
  console.log("SMS Sent");
}
function* checkSMS(action) {
  console.log("Message Checked");
}
function* makeQuery(action) {
  //   let bill = getData(action.date);
  console.log(`You got the new info from day ${action.date}`);
  let bill = {
    date: "00-00-00",
    transactions: [
      { time: "00-00-0000", value: 456556.0, toAccount: "18650-0" },
      { time: "00-00-0000", value: 456.0, toAccount: "11234-5" },
      { time: "00-00-0000", value: 123456.0, toAccount: "14829-4" },
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

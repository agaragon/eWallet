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
    balance: "-1234,25",
  };
  yield put({ type: "GET_USER_INFO", user: user });
}
function* registerUser(action) {
  console.log("hi");
  //   sendSMS(action.phoneNumber);
}

export function* sagaFetchUser() {
  yield takeLatest("LOGIN", getUsersData);
}

export function* sagaRegistration() {
  yield takeLatest("SEND_SMS", registerUser);
}

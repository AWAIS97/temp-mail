import {
  put,
  takeEvery,
  takeLatest,
  call,
  all,
  fork,
} from "redux-saga/effects";
import { getTempMail, checkTempMailbox } from "../utils";

function* workerGetTempMail() {
  try {
    const response = yield call(getTempMail);
    yield put({ type: "GET_TEMP_MAIL_SUCCEEDED", response });
  } catch (error) {
    alert(error);
  }
}

function* workerGetMailInbox({ payload }) {
  try {
    const response = yield call(() => checkTempMailbox(payload));
    yield put({ type: "GET_MAIL_INBOX_SUCCEEDED", response });
  } catch (error) {
    alert(error);
  }
}

function* watch() {
  yield takeLatest("GET_TEMP_MAIL_REQUEST", workerGetTempMail);
  yield takeLatest("GET_MAIL_INBOX_REQUEST", workerGetMailInbox);
}

const rootSaga = function* rootSaga() {
  yield all([watch()]);
};

export default rootSaga;

import {all, fork, put, take} from "redux-saga/effects";
import {onAppInit, onAppReady, setUnits} from "./App";
import appSaga from "./App/sagas";

export function* initialSaga() {
  yield put(onAppInit());
  yield take(setUnits);

  // Indicate that the app is initialized
  yield put(onAppReady());
}

function* rootSaga() {
  yield fork(initialSaga);
  // Add Sagas Here
  yield all([appSaga].map(fork));
}

export default rootSaga;

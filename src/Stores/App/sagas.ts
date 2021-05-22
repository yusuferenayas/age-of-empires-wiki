import {UnitModel} from "Models";
import {call, put, takeLatest} from "redux-saga/effects";
import getUnits from "Services/Queries/GetUnits";
import {onAppInit, setUnits} from "./slices";

// Workers

function* handleOnAppInit() {
  try {
    const unitsResult: UnitModel[] = yield call(() => getUnits());

    yield put(setUnits(unitsResult));
  } catch (error) {
    console.log(error);
  }
}

// Watchers
function* appSagasWatcher() {
  yield takeLatest(onAppInit, handleOnAppInit);
}

// eslint-disable-next-line
export default appSagasWatcher;

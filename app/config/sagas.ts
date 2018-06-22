import { takeEvery } from "redux-saga/effects";

import { GET_INITIAL_DELIVERIES } from "../actions/drivers";

const fetchLatestConversionRates = function*(action: any) {
  console.log("TODO: Update the things.", action);
  yield;
};

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_DELIVERIES, fetchLatestConversionRates);
};

export default rootSaga;

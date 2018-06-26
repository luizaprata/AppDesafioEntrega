import Config from 'react-native-config'
import { takeEvery, call, put } from 'redux-saga/effects'

import {
  GET_INITIAL_DELIVERIES,
  DELIVERIES_RESULT,
  DELIVERIES_ERROR,
} from '../actions/deliveries'

const DELIVERIES_FETCH_ERROR = ':( Não foi possível encontrar entregas.'

export const getLatestDelivers = () => fetch(`${Config.APIARY_URL}`)
const fetchLatestConversionRates = function*(action: any) {
  try {
    const response = yield call(getLatestDelivers)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: DELIVERIES_ERROR, error: DELIVERIES_FETCH_ERROR })
    } else {
      yield put({ type: DELIVERIES_RESULT, result })
    }
  } catch (error) {
    yield put({ type: DELIVERIES_ERROR, error: DELIVERIES_FETCH_ERROR })
  }
}

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_DELIVERIES, fetchLatestConversionRates)
}

export default rootSaga

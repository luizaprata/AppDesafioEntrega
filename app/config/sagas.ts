import Config from 'react-native-config'
import { takeEvery, call, put } from 'redux-saga/effects'

import {
  GET_INITIAL_DELIVERIES,
  DELIVERIES_RESULT,
  DELIVERIES_ERROR,
} from '../actions/deliveries'

import { CALL_LOGIN, LOGIN_RESULT, LOGIN_ERROR } from '../actions/login'

const MSG_DELIVERIES_FETCH_ERROR = ':( Não foi possível encontrar entregas.'
const MSG_LOGIN_ERROR = ':( Não foi possível logar.'

export const getLatestDelivers = () =>
  fetch(`${Config.API_URL}${Config.API_TASKS}`)
const fetchLatestConversionRates = function*(action: any) {
  try {
    const response = yield call(getLatestDelivers)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: DELIVERIES_ERROR, error: MSG_DELIVERIES_FETCH_ERROR })
    } else {
      yield put({ type: DELIVERIES_RESULT, result })
    }
  } catch (error) {
    yield put({ type: DELIVERIES_ERROR, error: MSG_DELIVERIES_FETCH_ERROR })
  }
}

export const getLogin = () => fetch(`${Config.API_URL}${Config.API_LOGIN}`)
const callLogin = function*(action: any) {
  try {
    const response = yield call(getLogin)
    const result = yield response.json()

    if (result.error) {
      yield put({ type: DELIVERIES_ERROR, error: MSG_LOGIN_ERROR })
    } else {
      yield put({ type: LOGIN_RESULT, result })
    }
  } catch (error) {
    yield put({ type: LOGIN_ERROR, error: MSG_LOGIN_ERROR })
  }
}

const rootSaga = function*() {
  yield takeEvery(GET_INITIAL_DELIVERIES, fetchLatestConversionRates)
  yield takeEvery(CALL_LOGIN, callLogin)
}

export default rootSaga

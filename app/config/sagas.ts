import Config from 'react-native-config'
import { takeEvery, call, put, take } from 'redux-saga/effects'

import {
  GET_INITIAL_DELIVERIES,
  DELIVERIES_RESULT,
  DELIVERIES_ERROR,
} from '../actions/deliveries'

import { CALL_LOGIN, LOGIN_RESULT, LOGIN_ERROR } from '../actions/login'

const MSG_DELIVERIES_FETCH_ERROR = ':( Não foi possível encontrar entregas.'
const MSG_LOGIN_ERROR = ':( Não foi possível logar.'

const headerJSON = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const getLatestDelivers = () =>
  fetch(`${Config.API_BASE}${Config.API_TASKS}`)
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

export const getLogin = (credential) => {
  const authURL = `${Config.API_BASE}${Config.API_LOGIN}`
  return fetch(authURL, {
    body: JSON.stringify(credential),
    headers: headerJSON,
    method: 'POST',
  })
}
const callLogin = function*(credential: any) {
  try {
    const result = yield getLogin(credential)
    if (result.status === 200) {
      yield put({ type: LOGIN_RESULT, result })
    } else {
      yield put({ type: DELIVERIES_ERROR, error: MSG_LOGIN_ERROR })
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

export const CALL_LOGIN = 'CALL_LOGIN'
export const LOGIN_RESULT = 'LOGIN_RESULT'
export const LOGIN_ERROR = 'LOGIN_ERROR'


export const getLoginResult = () => ({
  type: LOGIN_RESULT,
})

export const callLogin = (credential:{}) => ({
    type: LOGIN_RESULT,
    credential
  })
  
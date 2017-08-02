import api from '../../helpers/ApiClient';
import config from '../../config/app'
import { AsyncStorage } from 'react-native';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const FORGOTPASSWORD = 'auth/FORGOTPASSWORD';
const FORGOTPASSWORD_SUCCESS = 'auth/FORGOTPASSWORD_SUCCESS';
const FORGOTPASSWORD_FAIL = 'auth/FORGOTPASSWORD_FAIL';

const RESETPASSWORD ='auth/RESETPASSWORD';
const RESETPASSWORD_SUCCESS ='auth/RESETPASSWORD_SUCCESS';
const RESETPASSWORD_FAIL = 'auth/RESETPASSWORD_FAIL';


const initialState = {
  user: undefined,
  forgotUser: undefined
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, user: action.result };
    case LOGIN_FAIL:
      return { ...state };

    case FORGOTPASSWORD:
      return { ...state };
    case FORGOTPASSWORD_SUCCESS:
      return { ...state, forgotUser:action.result };
    case FORGOTPASSWORD_FAIL:
      return { ...state};

    default:
      return state;
  }
}

export function login(data) {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: LOGIN });
    api
      .post('/api/login', data)
      .then((res) => {
        dispatch({ type: LOGIN_SUCCESS, result: res });
        AsyncStorage.setItem('userCredentials', JSON.stringify(data));
        resolve(res);
      })
      .catch((ex) => {
        dispatch({ type: LOGIN_FAIL });
        reject(ex);
      });
  });
}

export function forgotpassword(data) {
  return (dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: FORGOTPASSWORD});
    api
      .post('/api/request-reset', data)
      .then((res) => {
        if(res.status) {
          dispatch({ type: FORGOTPASSWORD_FAIL});
          resolve(res);
        } else {
          dispatch({type: FORGOTPASSWORD_SUCCESS, result: res});
          resolve(res);
        }
      })
      .catch((ex) => {
        dispatch({ type: FORGOTPASSWORD_FAIL});
        reject(ex);
      });
  });
}

export function changepassword(data) {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({type:RESETPASSWORD});
    api
      .post('/api/reset-password', data)
      .then((res) => {
        resolve(res);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}



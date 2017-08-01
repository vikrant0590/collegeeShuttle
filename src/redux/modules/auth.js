import api from '../../helpers/ApiClient';
import config from '../../config/app'
import { AsyncStorage } from 'react-native';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const FORGOTPASSWORD = 'auth/FORGOTPASSWORD';
const FORGOTPASSWORD_SUCCESS = 'auth/FORGOTPASSWORD_SUCCESS';
const FORGOTPASSWORD_FAIL = 'auth/FORGOTPASSWORD_FAIL';


const initialState = {
  user: null,
  isBusy:false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isBusy: true };
    case LOGIN_SUCCESS:
      return { ...state, user: action.result };
    case LOGIN_FAIL:
      return { ...state, isBusy: false };
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
      .post('/request-reset',data)
      .then((res) => {
        dispatch({ type: FORGOTPASSWORD_SUCCESS, result: res});
        config.AuthToken = res.accessToken;
        resolve(res);
      })
      .catch((ex) => {
        dispatch({ type: FORGOTPASSWORD_FAIL });
        reject(ex);
      });
  });
}


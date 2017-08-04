import api from '../../helpers/ApiClient';
import config from '../../config/app'
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
const GOOGLE_LOGIN_FAIL = 'GOOGLE_LOGIN_FAIL';

const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL';


const FORGOTPASSWORD = 'auth/FORGOTPASSWORD';
const FORGOTPASSWORD_SUCCESS = 'auth/FORGOTPASSWORD_SUCCESS';
const FORGOTPASSWORD_FAIL = 'auth/FORGOTPASSWORD_FAIL';

const RESETPASSWORD ='auth/RESETPASSWORD';
const RESETPASSWORD_SUCCESS ='auth/RESETPASSWORD_SUCCESS';


const initialState = {
  user: undefined,
  forgotUser: undefined,
  newPassword: undefined
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

    //google login ...
    case GOOGLE_LOGIN: {
      return{ ...state};
    }
    case GOOGLE_LOGIN_SUCCESS: {
      return{ ...state, user: action.result};
    }
    case GOOGLE_LOGIN_FAIL: {
      return{...state};
    }
    // reset password
    case RESETPASSWORD:{
      return{...state}
    }
    case RESETPASSWORD_SUCCESS:{
      return{...state, newPassword:action.result }
    }


    //facebook login ...

    case FACEBOOK_LOGIN:{
      return{...state};
    }
    case FACEBOOK_LOGIN_SUCCESS: {
      return{...state, user:action.result};
    }
    case FACEBOOK_LOGIN_FAIL: {
      return{...state};
    }

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
        dispatch({type:RESETPASSWORD_SUCCESS, result:res});
        resolve(res);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}

export function googlesignin(data) {
  return(dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: GOOGLE_LOGIN });
    api
      .post('/api/google', data)
      .then((res) =>{
        dispatch({ type: GOOGLE_LOGIN_SUCCESS, result: res});
        data.key="google";
        AsyncStorage.setItem('userCredentials', JSON.stringify(data));
        Actions.tabbar();
        resolve();
      })
      .catch((error) =>{
        dispatch({ type: GOOGLE_LOGIN_FAIL });
        reject(error);
      });
  });
}


export function facebooksignin(data) {
  return(dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: FACEBOOK_LOGIN });
    api
      .post('/api/facebook', data)
      .then((res) => {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, result: res });
        data.key="facebook";
        AsyncStorage.setItem('userCredentials', JSON.stringify(data));
        resolve(res);
      })
      .catch((error) => {
        dispatch({ type: FACEBOOK_LOGIN_FAIL });
        reject(error);
      });
  });
}



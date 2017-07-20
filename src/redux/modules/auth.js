import api from '../../helpers/ApiClient';
import { AsyncStorage } from 'react-native';
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';


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

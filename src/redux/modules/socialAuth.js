/**
 * Created by Admin on 17/07/17.
 */

import api from '../../helpers/ApiClient';

const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
const GOOGLE_LOGIN_FAIL = 'GOOGLE_LOGIN_FAIL';

const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
const FACEBOOK_LOGIN_FAIL = 'FACEBOOK_LOGIN_FAIL';

const instialState = {

};

export default function reducer(state = instialState, action = {}) {
  switch (action.type){
    //google login ...
    case GOOGLE_LOGIN: {
      return{ ...state};
    }
    case GOOGLE_LOGIN_SUCCESS: {
      return{ ...state};
    }
    case GOOGLE_LOGIN_FAIL: {
      return{...state};
    }
    //fcebook login ...

    case FACEBOOK_LOGIN:{
      return{...state};
    }
    case FACEBOOK_LOGIN_SUCCESS: {
      return{...state};
    }
    case FACEBOOK_LOGIN_FAIL: {
      return{...state};
    }

    default: {
      return state;
    }
  }
}

//in post, api aren't real .. please change the url to real.

export function googlesignin(data) {
  return(dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: GOOGLE_LOGIN });
    api
      .post('url', data)
      .then((response) =>{
        dispatch({ type: GOOGLE_LOGIN_SUCCESS, result: response});
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
      .post('url', data)
      .then((response) => {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, result: response });
        resolve();
      })
      .catch((error) => {
        dispatch({ type: FACEBOOK_LOGIN_FAIL });
        reject(error);
      });
  });
}

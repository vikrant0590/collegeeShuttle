import api from '../../helpers/ApiClient';

const REGISTER = 'register/REGISTER';
const REGISTER_SUCCESS = 'register/REGISTER';
const REGISTER_FAIL = 'register/REGISTER';


const initialState = {
  user: null,
  isBusy:false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER:
      return { ...state, isBusy: true };
    case REGISTER_SUCCESS:
      return { ...state, isBusy: false };
    case REGISTER_FAIL:
      return { ...state, isBusy: false };
    default:
      return state;
  }
}

export function register(data) {
  return (dispatch, getState)  => new Promise((resolve, reject) => {
    dispatch({ type: REGISTER });

    api
      .post('/api/register', data)
      .then((res) => {
        dispatch({ type: REGISTER_SUCCESS, result: res });
        resolve(res);
      })
      .catch((ex) => {
        dispatch({ type: REGISTER_FAIL });
        reject(ex);
      });
  });
}



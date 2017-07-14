import api from '../../helpers/ApiClient';

const REGISTER = 'register/REGISTER';
const REGISTER_SUCCESS = 'register/REGISTER';
const REGISTER_FAIL = 'register/REGISTER';


const initialState = {
  user: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER:
      return { ...state };
    case REGISTER_SUCCESS:
      return { ...state };
    case REGISTER_FAIL:
      return { ...state };
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
        console.log('res', res);
        dispatch({ type: REGISTER_SUCCESS, result: res });
        resolve();
      })
      .catch((ex) => {
        console.log('ex', ex);
        dispatch({ type: REGISTER_FAIL });
        reject(ex);
      });
  });
}
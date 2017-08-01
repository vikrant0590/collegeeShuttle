import api from '../../helpers/ApiClient';

const LOCATION = 'LOCATION';
const LOCATION_SUCCESS = 'LOCATION_SUCCESS';
const LOCATION_FAIL = 'LOCATION_FAIL';

const DESTINATION = 'DESTINATION';

const initialState = {
  locationResponse: undefined,
  selectedDestination: undefined,
  isBusy:false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOCATION:
      return { ...state, isBusy: true };
    case LOCATION_SUCCESS:
      return { ...state, user: action.result };
    case LOCATION_FAIL:
      return { ...state, isBusy: false };

    case DESTINATION: {
      return { ...state, selectedDestination: action.result };
    }

    default:
      return state;
  }
}

export function getLocationFrom() {
  return(dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: LOCATION });
    api
      .get('/api/locations')
      .then((response) => {
        dispatch({ type: LOCATION_SUCCESS, result: response });
        console.log('Result', response);
        resolve(response);
      })
      .catch((exp) => {
        dispatch({ type: LOCATION_FAIL});
        reject(exp)
      })
  })
}

export function getSelectedDestination(data) {
  return(dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: DESTINATION , result: data})
  })
}



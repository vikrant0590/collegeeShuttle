import api from '../../helpers/ApiClient';

const TRIP_SEARCH = 'TRIP_SEARCH';
const TRIP_SEARCH_SUCCESS = 'TRIP_SEARCH_SUCCESS';
const TRIP_SEARCH_FAIL = 'TRIP_SEARCH_FAIL';


const initialState = {
  weeklyTrip: undefined,
  isBusy: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TRIP_SEARCH: {
      return { ...state, isBusy: true }
    }
    case TRIP_SEARCH_SUCCESS: {
      return { ...state, weeklyTrip: action.result, isBusy: false }
    }
    case TRIP_SEARCH_FAIL: {
      return { ...state, isBusy: false }
    }
    default:
      return state;
  }
}

export function weeklyTripSearch( data ) {
  return(dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: TRIP_SEARCH });
    api
      .post('/api/trip/search', data)
      .then((response) => {
        dispatch({ type: TRIP_SEARCH_SUCCESS, result: response });
        resolve();
      })
      .catch((exp) => {
        dispatch({ type: TRIP_SEARCH_FAIL});
        reject(exp)
      })
  })
}

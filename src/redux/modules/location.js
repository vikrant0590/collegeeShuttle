import api from '../../helpers/ApiClient';

const LOCATION = 'LOCATION';
const LOCATION_SUCCESS = 'LOCATION_SUCCESS';
const LOCATION_FAIL = 'LOCATION_FAIL';

const DESTINATION = 'DESTINATION';
const SEARCH = 'SEARCH';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

const initialState = {
  locationResponse: undefined,
  selectedDestination: undefined,
  searchDestination: undefined,
  isBusy: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case LOCATION:
      return { ...state, isBusy: true };

    case LOCATION_SUCCESS: {
      const locations = action.result.filter((item) => item.ct.length > 0);
      return {...state, locationResponse: locations, isBusy: false };
    }

    case LOCATION_FAIL:
      return { ...state, isBusy: false };

    case DESTINATION: {
      return { ...state, selectedDestination: action.result };
    }

    case SEARCH: {
      let search = state.locationResponse;
      const searchData = search.filter(item => item.ct.indexOf(action.result) > -1);
      return { ...state, searchDestination: searchData }
    }

    case CLEAR_SEARCH: {
      return { ...state, searchDestination: undefined }
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
        resolve();
      })
      .catch((exp) => {
        dispatch({ type: LOCATION_FAIL});
        reject(exp)
      })
  })
}

export function getSelectedDestination(searchtext) {
  return(dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: DESTINATION , result: searchtext})
  })
}

export function searchSelectedDestination(text) {
  return(dispatch, getState) =>  new Promise((resolve, reject) => {
    dispatch({ type: SEARCH, result: text})
  })
}

export function clearSearchDestination() {
  return(dispatch, getState) =>  new Promise((resolve, reject) => {
    dispatch({ type: CLEAR_SEARCH})
  })
}
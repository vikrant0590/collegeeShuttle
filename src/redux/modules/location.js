import api from '../../helpers/ApiClient';

const DESTINATION = 'DESTINATION';


const FROM_LOCATION = 'FROM_LOCATION';
const FROM_LOCATION_SUCCESS = 'FROM_LOCATION_SUCCESS';
const FROM_LOCATION_FAIL = 'FROM_LOCATION_FAIL';

const TO_LOCATION = 'TO_LOCATION';
const TO_LOCATION_SUCCESS = 'TO_LOCATION_SUCCESS';
const TO_LOCATION_FAIL = 'TO_LOCATION_FAIL';

const SEARCH_LOCATION = 'SEARCH_LOCATION';
const CLEAR_SEARCH = 'CLEAR_SEARCH';

const initialState = {
  selectedDestination: undefined,
  searchLocation: undefined,
  fromLocation: undefined,
  toLocation: undefined,
  isBusy: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {

    case FROM_LOCATION: {
      return{ ...state, isBusy: true };
    }
    case FROM_LOCATION_SUCCESS: {
      const locations = action.result.filter((item) => item.ct.length > 0);
      return{ ...state, fromLocation: locations, isBusy: false };
    }
    case FROM_LOCATION_FAIL: {
      return {...state, isBusy: false };
    }

    case TO_LOCATION: {
      return{ ...state, isBusy: true };
    }
    case TO_LOCATION_SUCCESS: {
      const locations = action.result.filter((item) => item.ct.length > 0);
      return{ ...state, toLocation: locations, isBusy: false };
    }
    case TO_LOCATION_FAIL: {
      return{ ...state, isBusy: false }
    }

    case DESTINATION: {
      return { ...state, selectedDestination: action.result };
    }

    case SEARCH_LOCATION: {
      let search = undefined;
      if(action.searchPlaceholder === 'To'){
        search = state.toLocation;
      }else {
        search = state.fromLocation;
      }
      const searchData = search.filter(item => item.ct.indexOf(action.result) > -1);
      return { ...state, searchLocation: searchData }
    }

    case CLEAR_SEARCH: {
      return { ...state, searchLocation: undefined }
    }

    default:
      return state;
  }
}

export function getLocationFrom() {
  return(dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: FROM_LOCATION });
    api
      .get('/api/locations/type/1')
      .then((response) => {
        dispatch({ type: FROM_LOCATION_SUCCESS, result: response });
        resolve();
      })
      .catch((exp) => {
        dispatch({ type: FROM_LOCATION_FAIL});
        reject(exp)
      })
  })
}


export function getLocationTo() {
  return(dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: TO_LOCATION });
    api
      .get('/api/locations/type/2')
      .then((response) => {
        dispatch({ type: TO_LOCATION_SUCCESS, result: response });
        resolve();
      })
      .catch((exp) => {
        dispatch({ type: TO_LOCATION_FAIL });
        reject(exp)
      })
  })
}

export function getSelectedDestination(searchtext) {
  return(dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: DESTINATION , result: searchtext})
  })
}

export function searchSelectedDestination(text, placeholdersearch) {
  return(dispatch, getState) =>  new Promise((resolve, reject) => {
    dispatch({ type: SEARCH_LOCATION, result: text, searchPlaceholder: placeholdersearch})
  })
}

export function clearSearchDestination() {
  return(dispatch, getState) =>  new Promise((resolve, reject) => {
    dispatch({ type: CLEAR_SEARCH})
  })
}
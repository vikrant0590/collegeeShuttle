import { combineReducers } from 'redux';
import auth from './auth';
import register from './register';
import location from './location';

export default combineReducers({
  auth,
  register,
  location
});

import { combineReducers } from 'redux';
import auth from './auth';
import register from './register';
import socialauth from './socialAuth';
import location from './location';
import seachTrip from './searchTrip';
export default combineReducers({
  auth,
  register,
  socialauth,
  location,
  seachTrip
});

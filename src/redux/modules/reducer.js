import { combineReducers } from 'redux';
import auth from './auth';
import register from './register';
import socialauth from './socialAuth';

export default combineReducers({
  auth,
  register,
  socialauth
});

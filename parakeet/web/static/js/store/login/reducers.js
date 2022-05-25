import { combineReducers } from 'redux';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAILURE,
  STORE_USER,
  UPDATE_USER,
} from './actions';

export function loggedIn(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGOUT_SUCCESS:
      return false;
    case LOGIN_FAILURE:
      return false;
    default:
      return state;
  }
}

export function user(state = [], action) {
  switch (action.type) {
    case STORE_USER:
      return action.user;
    case UPDATE_USER:
      return action.user;
    default:
      return state;
  }
}

export default combineReducers({
  user,
  loggedIn,
});

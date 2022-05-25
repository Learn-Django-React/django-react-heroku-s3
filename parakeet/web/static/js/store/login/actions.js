import api from '../api';
import api2 from '../api2';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const STORE_USER = 'STORE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const logIn = () => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data: responseBody } = await api.get('/api/users/self/');
    dispatch({
      type: STORE_USER,
      user: responseBody,
    });
    dispatch({
      type: LOGIN_SUCCESS,
    });
  } catch {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
  try {
    const { data: responseBody } = await api.post('/auth/logout/');
    dispatch({
      type: STORE_USER,
      user: [],
    });
    dispatch({
      type: STORE_POSTS,
      posts: [],
    });
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch {
    dispatch({ type: LOGOUT_FAILURE });
  }
};

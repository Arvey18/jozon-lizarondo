import {API} from '../constant';
import {SHOW_PROGRESS, PROGRESS_VALUE} from '../actions/api-call-progress';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {createBrowserHistory} from 'history';

export const LOGIN = (username: string, password: string) => (
  dispatch: any
) => {
  dispatch(SHOW_PROGRESS(true));
  return axios({
    method: 'post',
    url: '/api/token/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
    },
    onUploadProgress: function(progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      dispatch(PROGRESS_VALUE(percentCompleted));
    },
    data: {
      username: username,
      password: password,
    },
  })
    .then(response => {
      dispatch(SHOW_PROGRESS(false));
      dispatch(PROGRESS_VALUE(0));
      return response.data;
    })
    .catch(error => {
      dispatch(SHOW_PROGRESS(false));
      dispatch(PROGRESS_VALUE(0));
      return error.response.data;
    });
};

export const TOKEN_EXPIRY_CHECKER = () => (dispatch: any) => {
  const token = localStorage.getItem('token');
  const customHistory = createBrowserHistory();
  if (token !== '') {
    const decodedToken: any = jwt_decode(token || '');
    if (decodedToken.exp < Date.now() / 1000) {
      alert('Session Expired Please Re-Login again!');
      localStorage.clear();
      localStorage.setItem('login', 'false');
      localStorage.setItem('token', '');
      customHistory.push('/');
    }
  }
};

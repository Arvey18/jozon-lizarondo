import {API} from '../constant';
import {SHOW_PROGRESS, PROGRESS_VALUE} from '../actions/api-call-progress';
import axios from 'axios';

export const GET_USER_DATA = (user_id: string) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  return axios({
    method: 'get',
    url: '/api/users/' + user_id + '/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
    },
    onUploadProgress: function(progressEvent) {
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      dispatch(PROGRESS_VALUE(percentCompleted));
    },
  })
    .then(response => {
      dispatch(SHOW_PROGRESS(false));
      dispatch(PROGRESS_VALUE(0));
      return response;
    })
    .catch(error => {
      dispatch(SHOW_PROGRESS(false));
      dispatch(PROGRESS_VALUE(0));
      return error.response;
    });
};

export const GET_USERS = () => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  return axios({
    method: 'get',
    url: '/api/users/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
    },
    onUploadProgress: function(progressEvent) {
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      dispatch(PROGRESS_VALUE(percentCompleted));
    },
  })
    .then(response => {
      dispatch(SHOW_PROGRESS(false));
      dispatch(PROGRESS_VALUE(0));
      return response;
    })
    .catch(error => {
      dispatch(SHOW_PROGRESS(false));
      dispatch(PROGRESS_VALUE(0));
      return error.response;
    });
};

import {API} from '../constant';
import {SHOW_PROGRESS, PROGRESS_VALUE} from '../actions/api-call-progress';
import axios from 'axios';

export const GET_DEPARTMENTS = () => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'get',
    url: '/api/department/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    onUploadProgress: function(progressEvent) {
      const percentCompleted = Math.round(
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

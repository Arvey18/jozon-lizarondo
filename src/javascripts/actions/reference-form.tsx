import {API} from '../constant';
import {SHOW_PROGRESS, PROGRESS_VALUE} from '../actions/api-call-progress';
import axios from 'axios';

export const GET_REFERENCE_FORMS = () => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'get',
    url: '/api/form/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
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

export const GET_REFERENCE_FORM = (id: string) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'get',
    url: '/api/form/' + id + '/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
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

export const DELETE_REFERENCE_FORM = (id: string) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'delete',
    url: '/api/form/' + id + '/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
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

export const ADD_REFERENCE_FORM = (
  fname: string,
  description: string,
  initial: string,
  department: string,
  formItem: any
) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  const data = JSON.parse(formItem);
  console.log(data);
  return axios({
    method: 'post',
    url: '/api/form/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: {
      name: fname,
      description: description,
      initial: initial,
      department: department,
      form_items: JSON.stringify(data),
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

export const UPDATE_REFERENCE_FORM = (
  id: string,
  fname: string,
  description: string
) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'patch',
    url: '/api/form/' + id + '/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: {
      name: fname,
      description: description,
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

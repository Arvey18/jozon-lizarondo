import {API, BRANCH} from '../constant';
import {SHOW_PROGRESS, PROGRESS_VALUE} from '../actions/api-call-progress';
import axios from 'axios';

export const GET_MATERIALS = () => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'get',
    url: '/api/material/',
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

export const GET_MATERIAL = (id: string) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'get',
    url: '/api/material/' + id + '/',
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

export const DELETE_MATERIAL = (id: string) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'delete',
    url: '/api/material/' + id + '/',
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

export const ADD_MATERIAL = (
  mname: string,
  description: string,
  quantity: number | string,
  cq: number | string,
  price: number | string
) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'post',
    url: '/api/material/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: {
      name: mname,
      description: description,
      branch: BRANCH[1].fields.id,
      quantity: quantity === undefined || quantity === '' ? 0 : quantity,
      charging_quantity: cq === undefined || cq === '' ? 0 : cq,
      price: price === undefined || price === '' ? 0 : price,
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

export const UPDATE_MATERIAL = (
  id: string,
  mname: string,
  description: string,
  quantity: number,
  cq: number,
  price: number
) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
  const token = localStorage.getItem('token');
  return axios({
    method: 'patch',
    url: '/api/material/' + id + '/',
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    data: {
      name: mname,
      description: description,
      branch: BRANCH[1].fields.id,
      quantity: quantity,
      charging_quantity: cq,
      price: price,
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

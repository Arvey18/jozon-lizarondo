import {API} from '../constant';
import {SHOW_PROGRESS, PROGRESS_VALUE} from '../actions/api-call-progress';
import axios from 'axios';

import {branch} from '../constant';

// variables
const token = localStorage.getItem('token');

export const GET_MATERIALS = () => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
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

export const DELETE_MATERIAL = (id: string) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
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
  quantity: number,
  cq: number,
  price: number
) => (dispatch: any) => {
  dispatch(SHOW_PROGRESS(true));
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
      branch: branch[1].fields.id,
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

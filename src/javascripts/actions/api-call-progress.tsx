import {TOKEN_EXPIRY_CHECKER} from './auth';

export const SHOW_PROGRESS = (show: boolean) => (dispatch: any) => {
  dispatch(TOKEN_EXPIRY_CHECKER());
  return dispatch({
    type: SHOW_PROGRESS,
    show: show,
  });
};

export const PROGRESS_VALUE = (value: number) => (dispatch: any) => {
  return dispatch({
    type: PROGRESS_VALUE,
    progress: value,
  });
};

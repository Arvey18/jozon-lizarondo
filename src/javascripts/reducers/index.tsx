import {combineReducers} from 'redux';

import apiCallProgress from './api-call-progress';

const rootReducer = combineReducers({
  apiCallProgress,
});

export default rootReducer;

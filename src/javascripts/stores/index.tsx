import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};
const middleWare = [ thunk ];
const store = createStore(
  rootReducer,
  initialState,

  // staging production
  applyMiddleware(...middleWare)

  // dev
  // compose(
  //   applyMiddleware(...middleWare),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

console.log(store);

export default store;

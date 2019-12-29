import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import api from '../api';
import reducers from './reducers';

export default (initialState = {}) =>  (
  createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(api)),
  )
);

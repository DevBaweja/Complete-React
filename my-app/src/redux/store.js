import rootReducer from './root-reducer';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

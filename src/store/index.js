import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middlewares/logger';
import rootReducer from './reducers';

export default function configureStore(preloadState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    return createStore(rootReducer, preloadState, composedEnhancers);
}
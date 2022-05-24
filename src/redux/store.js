// import { composeWithDevTools } from 'redux-devtools-extension';
import {
  combineReducers, legacy_createStore as createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import rocketReducers from './rockets/reducers/rocketReducers';
import missionReducers from './missions/reducers/missionReducers';

const rootReducer = combineReducers({
  rockets: rocketReducers,
  missions: missionReducers,
});

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(applyMiddleware(thunk)),
));
/* eslint-enable */
export default store;

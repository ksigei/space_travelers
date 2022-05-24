import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketReducers from './rockets/reducers/rocketReducers';

const rootReducer = combineReducers({
  rocketReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;

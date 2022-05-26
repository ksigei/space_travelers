import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketReducers from './rockets/reducers/rocketReducers';
import missionReducers from './missions/reducers/missionReducers';

const rootReducer = combineReducers({
  rocketReducers,
  missionReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;

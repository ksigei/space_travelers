import { GET_ROCKETS } from '../actions';

const initialState = {
  rockets: [],
};

const rocketReducers = (state = initialState.rockets, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducers;

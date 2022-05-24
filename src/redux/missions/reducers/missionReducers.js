import { GET_MISSIONS } from '../actions';

const initialState = {
  missions: [],
};

const missionReducers = (state = initialState.missions, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionReducers;

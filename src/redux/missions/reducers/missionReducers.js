import { GET_MISSIONS, JOIN_MISSIONS, LEAVE_MISSIONS } from '../actions';

const initialState = {
  missions: [],
};

const missionReducers = (state = initialState.missions, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSIONS:
      return state.map((mission) => {
        if (mission.missionId === action.payload) {
          return { ...mission, missionJoined: true };
        }
        return mission;
      });
    case LEAVE_MISSIONS:
      return state.map((mission) => {
        if (mission.missionId === action.payload) {
          return { ...mission, missionJoined: false };
        }
        return mission;
      });
    default:
      return state;
  }
};

export default missionReducers;

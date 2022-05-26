import { GET_ROCKETS, BOOOK_ROCKET, UNBOOOK_ROCKET } from '../actions';

const initialState = {
  rockets: [],
};

const rocketReducers = (state = initialState.rockets, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case BOOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.rocketId === action.payload) {
          return { ...rocket, rocketBooked: true };
        }
        return rocket;
      });
    case UNBOOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.rocketId === action.payload) {
          return { ...rocket, rocketBooked: false };
        }
        return rocket;
      });
    default:
      return state;
  }
};

export default rocketReducers;

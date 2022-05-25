/* eslint-disable array-callback-return */
import axios from 'axios';

export const GET_ROCKETS = 'SPACE-TRAVELERS/rockets/GET_ROCKETS';
export const BOOOK_ROCKET = 'SPACE-TRAVELERS/rockets/BOOOK_ROCKET';
export const UNBOOOK_ROCKET = 'SPACE-TRAVELERS/rockets/UNBOOOK_ROCKET';

export const getRocketsAction = () => async (dispatch) => {
  const rockets = await axios.get('https://api.spacexdata.com/v3/rockets');
  const data = await rockets.data;
  const rocketsArray = [];
  data.map((rocket) => {
    rocketsArray.push({
      rocketId: rocket.rocket_id,
      rocketName: rocket.rocket_name,
      rocketDescription: rocket.description,
      rocketImgUrl: rocket.flickr_images[0],
      rocketReservation: false,
    });
    dispatch({
      type: GET_ROCKETS,
      payload: rocketsArray,
    });
  });
};
export const bookRocket = (payload) => ({
  type: BOOOK_ROCKET,
  payload,
});

export const unbookRocket = (payload) => ({
  type: UNBOOOK_ROCKET,
  payload,
});
export default { getRocketsAction, bookRocket, unbookRocket };

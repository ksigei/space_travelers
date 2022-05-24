/* eslint-disable array-callback-return */
import axios from 'axios';

export const GET_ROCKETS = 'SPACE-TRAVELERS/rockets/GET_ROCKETS';

const getRocketsAction = () => async (dispatch) => {
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

export default getRocketsAction;

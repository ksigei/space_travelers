/* eslint-disable array-callback-return */
import axios from 'axios';

export const GET_MISSIONS = 'GET_MISSIONS';

const getMissionsAction = () => async (dispatch) => {
  const mission = await axios.get('https://api.spacexdata.com/v3/missions');
  const data = await mission.data;
  const missionArr = [];
  data.map((item) => {
    missionArr.push({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
    });
    dispatch({
      type: GET_MISSIONS,
      payload: mission,
    });
  });
};

export default getMissionsAction;

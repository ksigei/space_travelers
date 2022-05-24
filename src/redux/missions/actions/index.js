/* eslint-disable array-callback-return */
import axios from 'axios';

export const GET_MISSIONS = 'SPACE-TRAVELERS/missions/GET_MISSIONS';

const getMissionsAction = () => async (dispatch) => {
  const missions = await axios.get('https://api.spacexdata.com/v3/missions');
  const data = await missions.data;
  const missionsArray = [];
  data.map((mission) => {
    missionsArray.push({
      missionId: mission.mission_id,
      missionName: mission.mission_name,
      missionDescription: mission.description,
    });
    dispatch({
      type: GET_MISSIONS,
      payload: missionsArray,
    });
  });
};

export default getMissionsAction;

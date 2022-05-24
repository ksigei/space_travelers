import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissionsAction from '../redux/missions/actions';

function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsAction);
  }, []);

  const missions = useSelector((state) => state.missionsReducer);
  return missions.map((mission) => (
    <main className="box" key={mission.mission_id}>
      <div className="left">
        {/* <div className="mission-img">
        <img src={mission.missionImgUrl} alt="mission" />
      </div> */}
      </div>
      <div className="right">
        <h4>{mission.mission_name}</h4>
        <p>{mission.description}</p>
        <button type="button" className="btn btn-primary btn-md">
          Mission
        </button>
      </div>
    </main>
  ));
}

export default Missions;

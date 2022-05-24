import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissionsAction from '../redux/missions/actions';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsAction());
  }, []);
  const missions = useSelector((state) => state.missionReducers);
  return missions.map((mission) => (
    <main className="box" key={mission.missionId}>
      <div className="left">
        {/* <div className="mission-img">
          <img src={mission.missionImgUrl} alt="mission" />
        </div> */}
      </div>
      <div className="right">
        <h4>{mission.missionName}</h4>
        <p>{mission.missionDescription}</p>
        <button
          type="button"
          className="btn btn-primary btn-md"
        >
          Join mission

        </button>
      </div>
    </main>
  ));
};

export default Missions;


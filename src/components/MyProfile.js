import React from 'react';
import { useSelector } from 'react-redux';
import './css/MyProfile.css';

function MyProfile() {
  /* eslint-disable */ 
  const reservedRockets = useSelector((state) => state.rocketReducers.filter((rocket) => rocket.rocketBooked));
  const reservedMissions = useSelector((state) => state.missionReducers.filter((mission) => mission.missionJoined));
  /* eslint-enable */
  return (
    <div className="reserved-box">
      <div className="missions">
        <h3>My Missions</h3>
        {reservedMissions.length > 0 && reservedMissions.map((mission) => (
          <div className="mission" key={mission.missionId}>
            <p>{mission.missionName}</p>
          </div>
        ))}
      </div>
      <div className="rockets">
        <h3>My Rockets</h3>
        {reservedRockets.length > 0 && reservedRockets.map((rocket) => (
          <div className="rocket" key={rocket.id}>
            <p>{rocket.rocketName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProfile;

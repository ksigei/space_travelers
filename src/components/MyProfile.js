import React from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
  /* eslint-disable */ 
  const reservedRockets = useSelector((state) => state.rocketReducers.filter((rocket) => rocket.rocketBooked));
  /* eslint-enable */
  return (
    <div>
      <h3>Reserved Rockets</h3>
      {reservedRockets.map((rocket) => (
        <div key={rocket.id}>
          <h3>{rocket.rocketName}</h3>
        </div>
      ))}
    </div>
  );
}

export default MyProfile;

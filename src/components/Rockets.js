import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketsAction, bookRocket, unbookRocket } from '../redux/rockets/actions';
import './css/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketReducers);
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(getRocketsAction());
    }
  }, []);
  return rockets.map((rocket) => (
    <main className="box" key={rocket.rocketId}>
      <div className="left">
        <div className="rocket-img">
          <img src={rocket.rocketImgUrl} alt="rocket" />
        </div>
      </div>
      <div className="right">
        <h4>{rocket.rocketName}</h4>
        <p>
          {rocket.rocketBooked && <span><button type="button" className="btn btn-primary btn-sm active-btn" style={{ marginRight: `${5}px` }}>Reserved</button></span>}
          {rocket.rocketDescription}
        </p>
        {!rocket.rocketBooked ? (
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => dispatch(bookRocket(rocket.rocketId))}
          >
            Reserve Rocket
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => dispatch(unbookRocket(rocket.rocketId))}
          >
            Cancel reservation
          </button>
        )}
      </div>
    </main>
  ));
};

export default Rockets;

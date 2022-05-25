import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketsAction, bookRocket, unbookRocket } from '../redux/rockets/actions';
import './css/Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsAction());
  }, []);
  const rockets = useSelector((state) => state.rocketReducers);
  return rockets.map((rocket) => (
    <main className="box" key={rocket.rocketId}>
      <div className="left">
        <div className="rocket-img">
          <img src={rocket.rocketImgUrl} alt="rocket" />
        </div>
      </div>
      <div className="right">
        <h4>{rocket.rocketName}</h4>
        <p>{rocket.rocketDescription}</p>
        {!rocket.rocketBooked ? (
          <>
            <button type="button" className="btn btn-secondary btn-sm">
              Not reserved
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              onClick={() => dispatch(bookRocket(rocket.rocketId))}
            >
              Reserve Rocket

            </button>
          </>
        ) : (
          <>
            <button type="button" className="btn btn-secondary btn-sm active-btn">
              Reserved
            </button>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => dispatch(unbookRocket(rocket.rocketId))}
            >
              Cancel reservation
            </button>
          </>
        )}
      </div>
    </main>
  ));
};

export default Rockets;

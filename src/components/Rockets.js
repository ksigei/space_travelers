import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRocketsAction from '../redux/rockets/actions';
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
        <button
          type="button"
          className="btn btn-primary btn-md"
        >
          Reserve Rocket

        </button>
      </div>
    </main>
  ));
};

export default Rockets;

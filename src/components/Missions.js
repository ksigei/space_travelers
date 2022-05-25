import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsAction, joinMissionAction } from '../redux/missions/actions';
import './css/Mission.css';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsAction());
  }, []);
  const missions = useSelector((state) => state.missionReducers);
  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.missionId}>
              <td>{mission.missionName}</td>
              <td>{mission.missionDescription}</td>
              <td>
                <div className="status">
                  {!mission.missionJoined ? (
                    <>
                      <button type="button" className="btn btn-secondary btn-sm">
                        NOT A MEMBER
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => dispatch(joinMissionAction(mission.missionId))}>
                        Join Mission
                      </button>
                    </>
                  ) : (
                    <>
                      <button type="button" className="btn btn-secondary btn-sm active-btn">
                        ACTIVE MEMBER
                      </button>
                      <button type="button" className="btn btn-outline-danger btn-sm">
                        Leave Mission
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Missions;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsAction, joinMissionAction, leaveMissionAction } from '../redux/missions/actions';
import './css/Mission.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducers);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissionsAction());
    }
  }, []);
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
                      <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => dispatch(leaveMissionAction(mission.missionId))}>
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

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissionsAction from '../redux/missions/actions';
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
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {missions.map((mission) => (
          <tr key={mission.missionId}>
            <td>{mission.missionName}</td>
            <td>{mission.missionDescription}</td>
            <td>
              <div className="status">
                <h3>Not a member</h3>
                <button type="button" className="btn btn-primary btn-md">
                  Join mission
                </button>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
};

export default Missions;

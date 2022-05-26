import React from 'react';
import renderer from 'react-test-renderer';
import '../Missions';

test('matches snapshot', () => {
  const tree = renderer.create(
    <tr>
      <th>Mission</th>
      <th>Description</th>
      <th>Status</th>
    </tr>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

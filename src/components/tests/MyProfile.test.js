import React from 'react';
import renderer from 'react-test-renderer';
import '../MyProfile';

test('check if we have h3 tag', () => {
  const tree = renderer.create(
    <h3>My Missions</h3>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

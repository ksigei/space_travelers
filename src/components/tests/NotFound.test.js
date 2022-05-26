import React from 'react';
import renderer from 'react-test-renderer';
import '../NotFound';

test('not found', () => {
  const tree = renderer.create(<div>NotFound</div>).toJSON();
  expect(tree).toMatchSnapshot();
});

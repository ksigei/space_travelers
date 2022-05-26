import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../Rockets';
import store from '../../redux/store';

test('check if rockets matches the snapshot', () => {
  const tree = renderer.create(<Provider store={store}><Rockets /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

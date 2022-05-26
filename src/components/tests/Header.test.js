import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Header from '../Header';
import '@testing-library/jest-dom';

expect.extend({ toMatchDiffSnapshot });

test('@Header Rocket Navigation', () => {
  const { asFragment } = render(<HashRouter><Header /></HashRouter>);
  fireEvent.click(screen.getByText(/Rockets/));
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Rockets/));

  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('@Header Mission Navigation', () => {
  const { asFragment } = render(<HashRouter><Header /></HashRouter>);
  fireEvent.click(screen.getByText(/Missions/));
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Missions/));
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

test('@Header Profile Navigation', () => {
  const { asFragment } = render(<HashRouter><Header /></HashRouter>);
  fireEvent.click(screen.getByText(/Profile/));
  const firstRender = asFragment();
  fireEvent.click(screen.getByText(/Profile/));
  expect(firstRender).toMatchDiffSnapshot(asFragment());
});

import React from 'react';
import { render } from '@testing-library/react';
import { BasicFlyout } from './flyout.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicFlyout />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

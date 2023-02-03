import React from 'react';
import { render } from '@testing-library/react';
import { BasicRatingdisplay } from './ratingdisplay.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRatingdisplay />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

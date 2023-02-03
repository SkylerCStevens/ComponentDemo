import React from 'react';
import { render } from '@testing-library/react';
import { BasicReviewdisplay } from './reviewdisplay.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicReviewdisplay />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

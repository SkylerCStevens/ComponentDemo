import React from 'react';
import { render } from '@testing-library/react';
import { BasicCategories } from './categories.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCategories />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

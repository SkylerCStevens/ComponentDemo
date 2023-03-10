import React from 'react';
import { render } from '@testing-library/react';
import { BasicPrice } from './price.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPrice />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

import React from 'react';
import { render } from '@testing-library/react';
import { BasicMap } from './map.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMap />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

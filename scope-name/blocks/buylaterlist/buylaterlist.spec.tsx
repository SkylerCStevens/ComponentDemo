import React from 'react';
import { render } from '@testing-library/react';
import { BasicBuylaterlist } from './buylaterlist.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicBuylaterlist />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

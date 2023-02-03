import React from 'react';
import { render } from '@testing-library/react';
import { BasicCartlist } from './cartlist.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCartlist />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

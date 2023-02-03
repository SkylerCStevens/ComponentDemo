import React from 'react';
import { render } from '@testing-library/react';
import { BasicCarticon } from './carticon.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCarticon />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

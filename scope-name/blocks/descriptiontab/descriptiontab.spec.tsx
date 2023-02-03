import React from 'react';
import { render } from '@testing-library/react';
import { BasicDescriptiontab } from './descriptiontab.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDescriptiontab />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

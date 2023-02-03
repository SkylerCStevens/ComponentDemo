import React from 'react';
import { render } from '@testing-library/react';
import { BasicCommentinput } from './commentinput.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCommentinput />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

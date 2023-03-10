import React from 'react';
import { render } from '@testing-library/react';
import { BasicCommentpost } from './commentpost.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCommentpost />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});

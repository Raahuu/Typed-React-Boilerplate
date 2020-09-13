import React from 'react';
import { render } from '@testing-library/react';
import CustomForm from './CustomForm';

test('renders learn react link', () => {
  const { getByText } = render(<CustomForm />);
  const linkElement = getByText(/CustomForm/i);
  expect(linkElement).toBeInTheDocument();
});

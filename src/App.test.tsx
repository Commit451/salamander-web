import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome page', () => {
  render(<App />);
  const titleElement = screen.getByText(/stay productive/i);
  expect(titleElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render the input box', () => {
  render(<App />);
  const inputBox = screen.getByPlaceholderText("Your name");
  expect(inputBox).toBeInTheDocument();
});

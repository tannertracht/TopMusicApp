import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders headphone image button', () => {
  render(<App />);
  const element = screen.getByAltText(/headphones/i);
  expect(element).toBeInTheDocument();
});

test('renders Album button', () => {
  render(<App />);
  const element = screen.getByText(/Album/i);
  expect(element).toBeInTheDocument();
});

test('renders Song button', () => {
  render(<App />);
  const element = screen.getByText(/Song/i);
  expect(element).toBeInTheDocument();
});

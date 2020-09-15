import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('resume link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Resume/i);
  expect(linkElement).toBeInTheDocument();
});

test('blog link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});

test('pictures link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Pictures/i);
  expect(linkElement).toBeInTheDocument();
});

// src/App.test.js - NEW AND CORRECT CODE
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading "Quote of the Day"', () => {
  render(<App />);
  // We are searching for an element that has the text "Quote of the Day".
  // The 'i' makes the search case-insensitive.
  const headingElement = screen.getByText(/Quote of the Day/i);
  
  // The 'expect' line asserts that the element was successfully found in the document.
  expect(headingElement).toBeInTheDocument();
});
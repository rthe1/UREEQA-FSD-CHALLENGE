import { render, screen } from '@testing-library/react';
import App from './App';

test('input is required', () => {
  render(<App />);
  const input = (screen.getByRole("spinbutton"));
  expect(input).toBeRequired();
});


import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the matte generator workspace', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /build the first premium interface before the blank page wins\./i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /generate/i })
  ).toBeInTheDocument();
});

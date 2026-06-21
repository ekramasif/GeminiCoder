import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main generator workspace', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /build a modern product surface from one precise prompt\./i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /generate/i })
  ).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main generator workspace', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /ready to build something amazing\?/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /generate/i })
  ).toBeInTheDocument();
});

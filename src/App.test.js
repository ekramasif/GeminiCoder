import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the matte generator workspace', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /describe the product\. get the first build\./i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /generate/i })
  ).toBeInTheDocument();
});

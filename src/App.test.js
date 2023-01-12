import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
  const { container } = render(<App/>);
  expect(container.textContent).toContain('Customer Rewards Data');
});

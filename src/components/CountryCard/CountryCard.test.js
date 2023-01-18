import { render, screen } from '@testing-library/react';
import CountryCard from './CountryCard';

test('should render the country card with name', () => {
  const container = render(<CountryCard name="Test name" iso2="bq" />);
  const title = screen.getByText('Test name');
  expect(title).toBeVisible();
});

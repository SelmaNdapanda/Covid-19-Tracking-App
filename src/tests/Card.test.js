import { render, screen } from '@testing-library/react';
import CountryCard from '../components/Card';

describe('Card component', () => {
  test('should rendered correctly', () => {
    render(
      <CountryCard country="Algeria" totalCases="271050" />,
    );
    expect(screen).toMatchSnapshot();
  });
});

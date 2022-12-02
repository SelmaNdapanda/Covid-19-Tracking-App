import { render, screen } from '@testing-library/react';
import TotalCard from '../components/TotalCard';

describe('Card component', () => {
  test('should rendered correctly', () => {
    render(
      <TotalCard name="COUNTRIES" total="638547623" />,
    );
    expect(screen).toMatchSnapshot();
  });
});

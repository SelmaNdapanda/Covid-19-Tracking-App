import renderer from 'react-test-renderer';
import TotalCard from '../components/TotalCard';

describe('Filter component', () => {
  test('Snapshot test', () => {
    const totalCard = renderer.create(
      <TotalCard name="COUNTRIES" total="638547623" />,
    )
      .toJSON();
    expect(totalCard).toMatchSnapshot();
  });
});
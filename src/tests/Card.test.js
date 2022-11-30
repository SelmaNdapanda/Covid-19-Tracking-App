import renderer from 'react-test-renderer';
import CountryCard from '../components/Card';

describe('Filter component', () => {
  test('Snapshot test', () => {
    const totalCard = renderer.create(
      <CountryCard country={{ Country: { country: 'Algeria', totalCases: '271050' } }} />,
    )
      .toJSON();
    expect(totalCard).toMatchSnapshot();
  });
});
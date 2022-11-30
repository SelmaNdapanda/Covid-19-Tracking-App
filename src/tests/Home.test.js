import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/Home';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ([
    {
      Countries: {
        country: 'Algeria',
        totalCases: '271057',
      },
    },
    {
      Countries: {
        country: 'Namibia',
        totalCases: '169946',
      },
    },
  ]),
  useDispatch: () => mockDispatch,
}));

jest.mock('../redux/countrySlice', () => ({
  loadCountries: () => ([
    {
      Countries: {
        country: 'Algeria',
        totalCases: '271057',
      },
    },
    {
      Countries: {
        country: 'Namibia',
        totalCases: '169946',
      },
    },
  ]),
}));

describe('Home page', () => {
  test('Snapshot test', () => {
    const home = renderer.create(
      <Home />,
    )
      .toJSON();
    expect(home).toMatchSnapshot();
  });

  test('UI test', () => {
    render(<Home />);
    expect(screen.getByRole('input')).toBeInTheDocument();
  });
});
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('Snapshot test', () => {
    const navbar = renderer.create(
      <BrowserRouter>
        <Navbar title="All Countries Covid-19 cases" />
      </BrowserRouter>,
    )
      .toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
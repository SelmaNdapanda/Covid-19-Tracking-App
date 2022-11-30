import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Details from '../pages/Details';
import store from '../redux/configureStore';

describe('Details component', () => {
  test('should rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });
});
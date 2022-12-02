import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import store from '../redux/configureStore';

describe('Home component', () => {
  test('should rendered correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });
});

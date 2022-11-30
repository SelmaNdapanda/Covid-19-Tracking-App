import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import App from "../App";

const MockApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

describe('App', () => {
  render(<MockApp />);

  it('renders without crashing', async () => {
    expect(render(<MockApp />)).toMatchSnapshot();
    expect(true).toBeTruthy();
  });
});

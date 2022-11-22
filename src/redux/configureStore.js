import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countrySlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
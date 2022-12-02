import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countrySlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiURL = 'https://api.covid19api.com/summary';
const LOAD_COUNTRIES = 'LOAD_COUNTRIES';

const initialState = {
  countries: [],
  status: null,
};

export const loadCountries = createAsyncThunk(
  LOAD_COUNTRIES,
  async (thunkAPI) => {
    try {
      const countries = await axios.get(apiURL);
      return countries.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

const slice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCountries.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        const IsSucessful = state;
        IsSucessful.status = 'success';
        IsSucessful.countries = action.payload;
      })
      .addCase(loadCountries.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default slice.reducer;

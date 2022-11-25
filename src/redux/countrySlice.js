import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "https://api.covid19api.com/summary";
const LOAD_COUNTRIES = "LOAD_COUNTRIES";
const FILTER_DATA = 'FILTER_DATA';

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
  }
);

const filterNumbers = (countries, value) => {
  switch (value) {
    case '99999':
      return countries.filter((country) => country.All.TotalConfirmed < 100000);
    case '100000':
      return countries.filter((country) => country.All.TotalConfirmed >= 100000
        && country.All.TotalConfirmed < 200000);
    case '200000':
      return countries.filter((country) => country.All.TotalConfirmed >= 200000
        && country.All.TotalConfirmed < 300000);
    case '300000':
      return countries.filter((country) => country.All.TotalConfirmed >= 300000);
    default:
      return countries;
  }
};

export const filterCountry = (value) => async (dispatch) => {
  const countries = Object.values(countries);
  const filteredCountry = filterNumbers(countries, value);

  if (filteredCountry) {
    dispatch({
      type: FILTER_DATA,
      payload: filteredCountry,
    });
  }
};

const slice = createSlice({
  name: "countries",
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
        IsSucessful.countries = action.payload
      })
      .addCase(loadCountries.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default slice.reducer;

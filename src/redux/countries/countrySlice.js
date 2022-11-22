import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "countries",
  initialState: {
    countries: []
  },
  reducers: {
    getCountries: (state, action) => {
        state.countries = action.payload;
    },
  },
  
});

export default slice.reducer;

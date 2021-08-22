import { createSlice } from '@reduxjs/toolkit';

const inistialState = {
  countriesList: null,
  currentDetails: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: inistialState,
  reducers: {
    setCountries(state, { payload }) {
      state.countriesList = payload;
    },
    setCurrentDetails(state, { payload }) {
      state.currentDetails = payload;
    },
  },
});

export const { setCountries, setCurrentDetails } = countriesSlice.actions;

export default countriesSlice.reducer;

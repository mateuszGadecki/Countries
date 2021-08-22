import { createSlice } from '@reduxjs/toolkit';

const inistialState = {
  countriesList: null,
  countriesListByRegion: null,
  currentDetails: null,
  countrySearched: null,
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
    setCountriesByRegion(state, { payload }) {
      state.countriesListByRegion = payload;
    },
    setCountrySearched(state, { payload }) {
      state.countrySearched = payload;
    },
    clearList(state) {
      state.countriesListByRegion = null;
    },
  },
});

export const { setCountries, setCurrentDetails, setCountriesByRegion, setCountrySearched, clearList } =
  countriesSlice.actions;

export default countriesSlice.reducer;

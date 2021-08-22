import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countriesSlice';

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export const selectCountries = (state) => state.countries;

export default store;

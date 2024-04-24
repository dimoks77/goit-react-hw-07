import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filters: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;

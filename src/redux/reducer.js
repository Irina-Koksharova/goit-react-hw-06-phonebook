import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContact,
  deleteContact,
  filterContacts,
  updateFilter,
} from './actions';
import notification from '../services/notification';
import initialContacts from '../initial-data/initialContacts.json';

const items = createReducer(initialContacts, {
  [addContact]: (state, action) => {
    const includesContact = state.some(
      ({ name }) => name === action.payload.name,
    );
    return !includesContact
      ? [action.payload, ...state]
      : notification(`${action.payload.name} is already in your contacts`);
  },
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
  [updateFilter]: (state, action) => action.payload,
});

const reducer = combineReducers({
  items,
  filter,
});

export default reducer;

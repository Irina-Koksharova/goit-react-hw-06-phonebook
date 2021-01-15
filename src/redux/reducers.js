import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';
import notification from '../services/notification';
import initialContacts from '../initial/contacts.json';

const itemsReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => {
    const includesContact = state.some(({ name }) => name === payload.name);
    return !includesContact
      ? [payload, ...state]
      : notification(`${payload.name} is already in your contacts`);
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

export { itemsReducer, filterReducer };

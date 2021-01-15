import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContact = createAction('delete');
const filterContacts = createAction('changeFilter');
const updateFilter = createAction('updateFilter');

export { addContact, deleteContact, filterContacts, updateFilter };

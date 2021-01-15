import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const setContact = createAction('set');
const deleteContact = createAction('delete');
const filterContact = createAction('changeFilter');
const updateFilter = createAction('updateFilter');

export { addContact, setContact, deleteContact, filterContact, updateFilter };

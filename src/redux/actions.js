import shortid from 'shortid';
import types from './types';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const setContact = contacts => ({
  type: types.SET,
  payload: contacts,
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

export { addContact, setContact, deleteContact };

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

const filterContact = value => ({
  type: types.FILTER,
  payload: value,
});

const updateFilter = value => ({
  type: types.UPDATE,
  payload: value,
});

export { addContact, setContact, deleteContact, filterContact, updateFilter };

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

export default addContact;

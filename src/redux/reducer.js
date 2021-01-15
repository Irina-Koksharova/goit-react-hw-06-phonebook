import { combineReducers } from 'redux';
import types from './types';
import notification from '../services/notification';
import initialContacts from '../initial-data/initialContacts.json';

const items = (
  state = JSON.parse(localStorage.getItem('contacts') ?? initialContacts),
  { type, payload },
) => {
  switch (type) {
    case types.ADD:
      const includesContact = state.some(({ name }) => name === payload.name);
      if (!includesContact) {
        return [payload, ...state];
      } else {
        notification(`${payload.name} is already in your contacts`);
        return state;
      }
    case types.SET:
      window.localStorage.setItem('contacts', JSON.stringify(payload));
      return state;
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', action) => state;

const reducer = combineReducers({
  items,
  filter,
});

export default reducer;

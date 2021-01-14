import { combineReducers } from 'redux';
import types from './types';
import notification from '../services/notification';
import initialContacts from '../initial-data/initialContacts.json';

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const includesContact = state.some(({ name }) => name === payload.name);
      if (!includesContact) {
        return [payload, ...state];
      } else {
        notification(`${payload.name} is already in your contacts`);
        return state;
      }
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

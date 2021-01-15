import { configureStore } from '@reduxjs/toolkit';
import { getState, saveState } from '../services/useLocalStorage';
import reducer from './reducer';

const store = configureStore({
  reducer,
  preloadedState: {
    items: getState().contacts,
    filter: '',
  },
});

store.subscribe(() => {
  saveState({
    contacts: store.getState().items,
  });
});

export default store;

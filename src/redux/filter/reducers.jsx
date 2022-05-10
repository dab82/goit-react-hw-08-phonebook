import { createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';

export const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.searchSlice || initialState;

export const selectSearchSlice = createSelector([selectSlice], state => state);

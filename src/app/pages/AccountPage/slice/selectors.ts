import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.accountSlice || initialState;

export const selectAccountSlice = createSelector([selectSlice], state => state);

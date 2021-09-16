import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { searchSliceSaga } from './saga';
import { SearchSliceState } from './types';

export const initialState: SearchSliceState = {
  loading: false,
  idSearch: '',
  error: '',
  detailsUser: [],
};

const slice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getDetailsAccounts(state, action: PayloadAction<any>) {
      state.loading = true;
      state.idSearch = action.payload.idSearch;
      state.detailsUser = [];
    },
    getDetailsAccountsSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.idSearch = '';
      state.detailsUser = [action.payload.attributes];
    },
    getDetailsAccountsFailed(state, action: PayloadAction<any>) {
      state.loading = false;
      state.idSearch = '';
      state.detailsUser = [];
      state.error = action.payload.error;
    },
  },
});

export const { actions: searchSliceActions } = slice;

export const useSearchSliceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: searchSliceSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSearchSliceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

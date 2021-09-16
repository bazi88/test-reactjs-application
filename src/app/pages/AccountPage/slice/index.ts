import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { accountSliceSaga } from './saga';
import { AccountSliceState } from './types';

export const initialState: AccountSliceState = {
  loading: false,
  listAccount: [],
  error: '',
  id: '',
};

const slice = createSlice({
  name: 'accountSlice',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    getAccount(state, action: PayloadAction<any>) {
      state.loading = true;
      state.id = action.payload.id;
      state.listAccount = [];
    },
    getAccountSuccess(state, action: PayloadAction<any>){
      state.loading = false;
      state.listAccount = action.payload;
    },
    getAccountFail(state, action: PayloadAction<any>) {
      state.loading = false;
    }
  },
});

export const { actions: accountSliceActions } = slice;

export const useAccountSliceSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: accountSliceSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useAccountSliceSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

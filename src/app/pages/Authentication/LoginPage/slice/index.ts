import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loginPageSaga } from './saga';
import { LoginPageState } from './types';
import history from 'utils/history';

const tokenParse = localStorage.getItem('token') || '';

export const initialState: LoginPageState = {
  token: tokenParse,
  email: '',
  password: '',
  remember: true,
};

const slice = createSlice({
  name: 'loginPage',
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      const { email, password, remember } = action.payload;
      state.email = email;
      state.password = password;
      state.remember = remember;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
    },
    loginFailure(state, action) {
      state.token = '';
      localStorage.removeItem('token');
    },
    logOut(state, action) {
      state.email = '';
      state.password = '';
      state.token = '';
      localStorage.removeItem('token');
      history.push('/login');
    },
  },
});

export const { actions: loginPageActions } = slice;

export const useLoginPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: loginPageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useLoginPageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */

import { LoginPageState } from 'app/pages/Authentication/LoginPage/slice/types';
import { SearchSliceState } from 'app/pages/SearchPage/slice/types';
import { AccountSliceState } from 'app/pages/AccountPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  theme: import('/Users/nguyenquan/Desktop/project/operation-portal/src/styles/theme/slice/types').ThemeState;
  loginPage: LoginPageState;
  searchSlice?: SearchSliceState;
  accountSlice?: AccountSliceState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

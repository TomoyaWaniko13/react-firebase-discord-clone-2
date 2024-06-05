import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '@/src/types/Types';

// for createSlice():
// https://redux-toolkit.js.org/api/createSlice

const initialState: InitialUserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});
console.log(userSlice);
export const { login, logout } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/src/store/slices/userSlice';

export const store = configureStore({
  reducer: { user: userReducer },
});

// https://redux-toolkit.js.org/tutorials/typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

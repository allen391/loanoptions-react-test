import { configureStore } from '@reduxjs/toolkit';
import uniReducer from './uni-slice';

export const store = configureStore({
  reducer: {
    uni: uniReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

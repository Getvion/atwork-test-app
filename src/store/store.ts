import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { archivedUsers, usersData } from './index';

export const store = configureStore({
  reducer: {
    usersData,
    archivedUsers
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;

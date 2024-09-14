import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

// import { modalWindows, projectCosts, projectData, projectsData, userData } from './index';

export const store = configureStore({
  reducer: {
    // userData,
    // modalWindows,
    // projectsData,
    // projectData,
    // projectCosts
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

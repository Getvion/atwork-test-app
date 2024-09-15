import { IStore, IUserData, IUsersDataSlice } from 'shared/types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUsersData } from './usersRequests';

const initialState: IUsersDataSlice = {
  usersData: []
};

const usersDataSlice = createSlice({
  name: 'users-data',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<IUserData[]>) => {
      state.usersData = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      // передаем id пользователя которого надо удалить
      state.usersData = state.usersData.filter((user) => user.id !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersData.fulfilled, (state, action) => {
      state.usersData = action.payload;
    });
  }
});

export const userDataReducer = usersDataSlice.reducer;

// actions
export const { setUsers, deleteUser } = usersDataSlice.actions;

// selectors
export const selectUsers = (state: IStore) => state.usersData;

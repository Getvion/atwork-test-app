import { IStore, IUserData } from 'shared/types';
import { IArchivedUsers } from 'shared/types/storeTypes';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IArchivedUsers = {
  usersData: []
};

const archivedUsersSlice = createSlice({
  name: 'archived-users-data',
  initialState,
  reducers: {
    deleteArchivedUser: (state, action: PayloadAction<number>) => {
      // передаем id пользователя которого надо удалить
      state.usersData = state.usersData.filter((user) => user.id !== action.payload);
    },
    addArchivedUser: (state, action: PayloadAction<IUserData>) => {
      state.usersData = [...state.usersData, action.payload];
    }
  }
});

export const archivedUsersReducer = archivedUsersSlice.reducer;

// actions
export const { deleteArchivedUser, addArchivedUser } = archivedUsersSlice.actions;

// selectors
export const selectArchivedUsers = (state: IStore) => state.archivedUsers;

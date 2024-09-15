import { IUserData } from './user';

export interface IStore {
  usersData: IUsersDataSlice;
  archivedUsers: IArchivedUsers;
}

export interface IUsersDataSlice {
  usersData: IUserData[];
}

export interface IArchivedUsers {
  usersData: IUserData[];
}

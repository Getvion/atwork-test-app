import axios from 'axios';
import { IUserData } from 'shared/types';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsersData = createAsyncThunk(
  'users-data/get-users-data',
  async (): Promise<IUserData[]> => {
    const results = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=6');

    return results.data;
  }
);

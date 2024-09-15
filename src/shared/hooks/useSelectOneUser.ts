import { useEffect } from 'react';
import { getUsersData, selectUsers } from 'store/usersData';

import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

export const useSelectOneUser = (id: string | number) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const allUsers = useAppSelector(selectUsers).usersData;

  const foundUser = allUsers.find((user) => user.id === Number(id));

  return foundUser;
};

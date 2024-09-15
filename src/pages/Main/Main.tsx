import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import { getUsersData, selectUsers } from 'store/usersData';

import styles from './Main.module.scss';

export const Main = () => {
  const dispatch = useAppDispatch();

  const { usersData } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return <div>{usersData.map((user) => user.id)}</div>;
};

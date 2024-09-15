import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks';
import { MainTitle } from 'shared/ui';
import { selectArchivedUsers } from 'store/archivedUsers';
import { getUsersData, selectUsers } from 'store/usersData';
import { UserCard } from 'widgets';

import styles from './Main.module.scss';

export const Main = () => {
  const dispatch = useAppDispatch();

  const actvieUsersData = useSelector(selectUsers).usersData;
  const archivedUsersData = useSelector(selectArchivedUsers).usersData;

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.active}>
        <MainTitle title='Активные' />
        <div className={styles.cards}>
          {actvieUsersData.length > 0 ? (
            actvieUsersData.map((user) => <UserCard key={user.id} userData={user} />)
          ) : (
            <div>нет актинвых записей</div>
          )}
        </div>
      </div>
      <div className={styles.archived}>
        <MainTitle title='Архив' />
        <div className={styles.cards}>
          {archivedUsersData.length > 0 ? (
            archivedUsersData.map((user) => <UserCard key={user.id} userData={user} />)
          ) : (
            <div>нет архивных записей</div>
          )}
        </div>
      </div>
    </div>
  );
};

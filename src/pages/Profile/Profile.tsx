import ArrowBack from 'assets/icons/arrow-left.svg?react';
import AvatarFull from 'assets/images/avatar-full.png';
import { Link } from 'react-router-dom';
import { MainTitle, Tab } from 'shared/ui';
import { ProfileForm } from 'widgets';

import styles from './Profile.module.scss';

export const Profile = () => (
  <div className={styles.profile}>
    <Link className={styles.back} to='/'>
      <ArrowBack />
      Назад
    </Link>
    <div className={styles.content}>
      <div className={styles.user__image}>
        <img src={AvatarFull} alt='avatar full' />
        <div className={styles.tabs}>
          <Tab tabContent='Данные профиля' active />
          <Tab tabContent='Рабочее пространство' active={false} />
          <Tab tabContent='Приватность' active={false} />
          <Tab tabContent='Безопасность' active={false} />
        </div>
      </div>
      <div className={styles.user__data}>
        <MainTitle title='Данные профиля' />

        <ProfileForm />
      </div>
    </div>
  </div>
);

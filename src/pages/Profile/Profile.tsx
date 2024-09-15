import ArrowBack from 'assets/icons/arrow-left.svg?react';
import AvatarFull from 'assets/images/avatar-full.png';
import { Link } from 'react-router-dom';
import { Button, Input, MainTitle, Tab } from 'shared/ui';

import styles from './Profile.module.scss';

export const Profile = () => {
  const onFormSubmit = () => {};

  return (
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

          <form className={styles.user__form}>
            <Input onClearClick={() => {}} textContent='Имя' />
            <Input onClearClick={() => {}} textContent='Никнейм' />
            <Input onClearClick={() => {}} textContent='Почта' />
            <Input onClearClick={() => {}} textContent='Город' />
            <Input onClearClick={() => {}} textContent='Телефон' />
            <Input onClearClick={() => {}} textContent='Название компании' />

            <Button onClick={onFormSubmit}>Сохранить</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

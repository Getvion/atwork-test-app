import DotsIcon from 'assets/icons/dots.svg?react';
import AvatarImage from 'assets/images/avatar.png';
import { Link } from 'react-router-dom';
import { IUserData } from 'shared/types';

import styles from './UserCard.module.scss';

interface IUserCard extends React.ComponentPropsWithoutRef<'div'> {
  userData: IUserData;
}

export const UserCard = ({ userData }: IUserCard) => {
  const onDotsClick = () => {};

  return (
    <Link to={`/profile/${userData.id}`}>
      <div className={styles.card}>
        <img src={AvatarImage} alt='avatar' className={styles.card__image} />
        <div className={styles.card__info}>
          <div className={styles.info__container}>
            <span className={styles.card__username}>{userData.name}</span>
            <span className={styles.card__company}> {userData.company.name}</span>
          </div>
          <span className={styles.card__city}> {userData.address.city}</span>

          <button onClick={onDotsClick} aria-label='dots-icon' className={styles.dots}>
            <DotsIcon />
          </button>
        </div>
      </div>
    </Link>
  );
};

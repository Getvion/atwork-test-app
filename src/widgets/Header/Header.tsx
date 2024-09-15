import FavoriteIcon from 'assets/icons/favorite.svg?react';
import NotificationIcon from 'assets/icons/notification.svg?react';
import atWorkLogo from 'assets/images/at-work-logo.svg';
import AvatarImage from 'assets/images/avatar.png';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

interface IHeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  userName: string;
}

export const Header = ({ userName }: IHeaderProps) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link to='/'>
        <img className={styles.logo} src={atWorkLogo} alt='at work logo' />
      </Link>
      <nav className={styles.nav}>
        <button aria-label='notification' className={styles.nav__notification}>
          <NotificationIcon />
        </button>
        <button aria-label='favorite' className={styles.nav__favorite}>
          <FavoriteIcon />
        </button>
        <div className={styles.nav__profile}>
          <img src={AvatarImage} alt='avatar' /> <span>{userName}</span>
        </div>
      </nav>
    </div>
  </header>
);

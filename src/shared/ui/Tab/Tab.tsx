import clsx from 'clsx';

import styles from './Tab.module.scss';

interface ITab extends React.ComponentPropsWithoutRef<'div'> {
  tabContent: string;
  active: boolean;
}

export const Tab = ({ tabContent, active }: ITab) => (
  <div className={clsx(styles.tab, { [styles.active]: active })}>{tabContent}</div>
);

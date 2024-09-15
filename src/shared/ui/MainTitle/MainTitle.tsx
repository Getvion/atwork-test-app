import styles from './MainTitle.module.scss';

interface IMainTitle extends React.ComponentPropsWithoutRef<'div'> {
  title: string;
}

export const MainTitle = ({ title }: IMainTitle) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <hr className={styles.line} />
  </div>
);

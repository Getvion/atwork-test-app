import styles from './Button.module.scss';

interface IButtonProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'> {
  onClick: () => void;
}

export const Button = ({ children, onClick }: IButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

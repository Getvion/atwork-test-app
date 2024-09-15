import styles from './Button.module.scss';

interface IButtonProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'> {
  onClick: () => void;
}

export const Button = ({ disabled, children, onClick }: IButtonProps) => (
  <button disabled={disabled} className={styles.button} onClick={onClick}>
    {children}
  </button>
);

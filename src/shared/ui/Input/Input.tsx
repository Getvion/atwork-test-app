import CloseIcon from 'assets/icons/close.svg?react';

import styles from './Input.module.scss';

interface IInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onClick'> {
  onClearClick: () => void;
  textContent: string;
}

export const Input = ({ onChange, onClearClick, textContent, value }: IInputProps) => (
  <label htmlFor={textContent} className={styles.label}>
    <span className={styles.text}>{textContent}</span>
    <input
      className={styles.input}
      id={textContent}
      type='text'
      value={value}
      onChange={onChange}
    />
    {value && (
      <button aria-label='close' className={styles.close__button} onClick={onClearClick}>
        <CloseIcon />
      </button>
    )}
  </label>
);

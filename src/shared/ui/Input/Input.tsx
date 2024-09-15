import CloseIcon from 'assets/icons/close.svg?react';
import { useState } from 'react';

import styles from './Input.module.scss';

interface IInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onClick'> {
  onClearClick: () => void;
  textContent: string;
}

export const Input = ({ onChange, onBlur, onFocus, onClearClick, textContent }: IInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const onCloseClick = () => {
    setInputValue('');

    onClearClick();
  };

  return (
    <label htmlFor={textContent} className={styles.label}>
      <span className={styles.text}>{textContent}</span>
      <input
        className={styles.input}
        id={textContent}
        type='text'
        value={inputValue}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onInputChange}
      />
      {inputValue && (
        <button aria-label='close' className={styles.close__button} onClick={onCloseClick}>
          <CloseIcon />
        </button>
      )}
    </label>
  );
};

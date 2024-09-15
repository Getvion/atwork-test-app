/* eslint-disable jsx-a11y/control-has-associated-label */
import CloseIcon from 'assets/icons/close.svg?react';
import { useState } from 'react';

import styles from './Input.module.scss';

interface IInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onClick'> {
  onClick: () => void;
  textContent: string;
}

export const Input = ({ onChange, onBlur, onFocus, onClick, textContent }: IInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const onClearClick = () => {
    setInputValue('');

    onClick();
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
        <button className={styles.close__button} onClick={onClearClick}>
          <CloseIcon />
        </button>
      )}
    </label>
  );
};

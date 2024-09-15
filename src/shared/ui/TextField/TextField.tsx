import styles from './TextField.module.scss';

interface ITextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  textContent: string;
}

export const TextField = ({ onChange, onFocus, onBlur, textContent }: ITextFieldProps) => (
  <input
    className={styles.input}
    type='text'
    placeholder={textContent}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

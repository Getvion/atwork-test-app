import { useState } from 'react';
import { Button, Input } from 'shared/ui';

import styles from './ProfileForm.module.scss';

const defaultInputValue = { name: '', nickname: '', email: '', city: '', phone: '', company: '' };

export const ProfileForm = () => {
  const [inputValues, setInputValues] = useState(defaultInputValue);
  const [isFormValid, setisFormValid] = useState(false);

  const onFormSubmit = () => {
    if (isFormValid) {
      console.log('nice');
    } else {
      console.log('fuck you');
    }
  };

  const onInputChange = (key: keyof typeof inputValues, inputValue: string) => {
    setInputValues({ ...inputValues, [key]: inputValue });
  };

  return (
    <form className={styles.user__form}>
      <Input
        textContent='Имя'
        value={inputValues.name}
        onChange={(e) => onInputChange('name', e.target.value)}
        onClearClick={() => onInputChange('name', '')}
      />
      <Input
        value={inputValues.nickname}
        textContent='Никнейм'
        onChange={(e) => onInputChange('nickname', e.target.value)}
        onClearClick={() => onInputChange('name', '')}
      />
      <Input
        textContent='Почта'
        value={inputValues.email}
        onChange={(e) => onInputChange('email', e.target.value)}
        onClearClick={() => onInputChange('email', '')}
      />
      <Input
        textContent='Город'
        value={inputValues.city}
        onChange={(e) => onInputChange('city', e.target.value)}
        onClearClick={() => onInputChange('city', '')}
      />
      <Input
        textContent='Телефон'
        value={inputValues.phone}
        onChange={(e) => onInputChange('phone', e.target.value)}
        onClearClick={() => onInputChange('phone', '')}
      />
      <Input
        textContent='Название компании'
        value={inputValues.company}
        onChange={(e) => onInputChange('company', e.target.value)}
        onClearClick={() => onInputChange('company', '')}
      />

      <Button disabled={!isFormValid} onClick={onFormSubmit}>
        Сохранить
      </Button>
    </form>
  );
};

import { useEffect, useState } from 'react';
import { useSelectOneUser } from 'shared/hooks';
import { Button, Input } from 'shared/ui';
import { ModalWindow } from 'widgets';

import styles from './ProfileForm.module.scss';

const defaultInputValue = { name: '', nickname: '', email: '', city: '', phone: '', company: '' };

export const ProfileForm = () => {
  const [inputValues, setInputValues] = useState(defaultInputValue);
  const [isFormValid, setisFormValid] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const currentUserId = Number(window.location.toString().split('/').reverse()[0]);
  const userData = useSelectOneUser(currentUserId);

  const onFormSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (isFormValid) {
      setModalShow(true);
    }
  };

  const { name, nickname, city, phone, company, email } = inputValues;
  useEffect(() => {
    const isAllInputsFilled = name && nickname && city && phone && company && email;
    if (isAllInputsFilled) {
      setisFormValid(true);
    } else {
      setisFormValid(false);
    }
  }, [name, nickname, city, phone, company, email]);

  const onInputChange = (key: keyof typeof inputValues, inputValue: string) => {
    setInputValues({ ...inputValues, [key]: inputValue });
  };

  return (
    <>
      <form className={styles.user__form} onSubmit={onFormSubmit}>
        <Input
          textContent='Имя'
          value={name}
          onChange={(e) => onInputChange('name', e.target.value)}
          onClearClick={() => onInputChange('name', '')}
        />
        <Input
          value={nickname}
          textContent='Никнейм'
          onChange={(e) => onInputChange('nickname', e.target.value)}
          onClearClick={() => onInputChange('name', '')}
        />
        <Input
          textContent='Почта'
          value={email}
          onChange={(e) => onInputChange('email', e.target.value)}
          onClearClick={() => onInputChange('email', '')}
        />
        <Input
          textContent='Город'
          value={city}
          onChange={(e) => onInputChange('city', e.target.value)}
          onClearClick={() => onInputChange('city', '')}
        />
        <Input
          textContent='Телефон'
          value={phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
          onClearClick={() => onInputChange('phone', '')}
        />
        <Input
          textContent='Название компании'
          value={company}
          onChange={(e) => onInputChange('company', e.target.value)}
          onClearClick={() => onInputChange('company', '')}
        />

        <Button disabled={!isFormValid} onClick={onFormSubmit}>
          Сохранить
        </Button>
      </form>
      <ModalWindow show={modalShow} setShow={setModalShow} />
    </>
  );
};

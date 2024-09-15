import CheckedBoxIcon from 'assets/icons/checked-box.svg?react';
import CloseIcon from 'assets/icons/close.svg?react';
import { useRef } from 'react';
import { useOnClickOutside } from 'shared/hooks';
import { PortalModal } from 'shared/lib';

import styles from './ModalWindow.module.scss';

interface IModalWindow {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const ModalWindow = ({ show, setShow }: IModalWindow) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onCloseWindow = () => {
    setShow(false);
  };

  useOnClickOutside(modalRef, onCloseWindow);

  return (
    show && (
      <PortalModal wrapperId='portal-modal'>
        <div className={styles.modal__container}>
          <div ref={modalRef} className={styles.modal}>
            <CloseIcon onClick={onCloseWindow} />
            <div className={styles.content}>
              <CheckedBoxIcon />
              <p>Изменения сохранены</p>
            </div>
          </div>
        </div>
      </PortalModal>
    )
  );
};

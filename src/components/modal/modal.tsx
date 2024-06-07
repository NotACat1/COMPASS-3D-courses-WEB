// Импортируем React и другие библиотеки
import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Подключение компонентов
import ModalOverlay from 'components/modal-overlay/modal-overlay';
import SvgClose from 'components/svg-close/svg-close';

// Импортируем константы и функции из утилитарного файла
import { modalRoot } from './modal.utils';

// Подключение стилей и данных
import styles from './modal.module.scss';

interface IModal {
  children: React.ReactNode;
  onClose: () => void;
}

// Компонент модального окна
const Modal: FC<IModal> = ({ children, onClose }) => {
  // Обработка события нажатия на клавишу "Escape" для закрытия модального окна
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Добавление слушателя события "keydown" при монтировании компонента
    document.addEventListener('keydown', handleEsc);

    // Удаление слушателя события "keydown" при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!modalRoot) return null;

  // Используем createPortal для отображения модального окна вне обычного порядка вложенности
  return ReactDOM.createPortal(
    <>
      <div className={styles.container}>
        {/* Кнопка для закрытия модального окна */}
        <button
          title="Кнопка для закрытия модального окна"
          className={styles.container__button}
          onClick={onClose}
        >
          <SvgClose extraClass={styles.container__image} />
        </button>
        {/* Внутреннее содержимое модального окна */}
        {children}
      </div>
      {/* Затемненный фон вокруг модального окна */}
      <ModalOverlay onClose={onClose} />
    </>,
    // DOM-контейнер, в который будет вставлен портал
    modalRoot,
  );
};

export default Modal;

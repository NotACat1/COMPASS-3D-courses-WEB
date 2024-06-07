// Импортируем React
import React, { FC } from 'react';

// Подключение стилей и данных
import styles from './modal-overlay.module.scss';

interface IModalOverlay {
  onClose: () => void;
}

// Компонент оверлея модального окна
const ModalOverlay: FC<IModalOverlay> = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose}></div>;
};

export default ModalOverlay;

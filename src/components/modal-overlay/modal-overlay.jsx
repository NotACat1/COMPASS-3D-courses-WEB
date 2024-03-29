// Импортируем React
import React from 'react';
import PropTypes from 'prop-types';

// Подключение стилей и данных
import styles from './modal-overlay.module.scss';

// Компонент оверлея модального окна
export default function ModalOverlay({ onClose }) {
  return <div className={styles.overlay} onClick={onClose}></div>;
}

// Определение PropTypes для компонента
ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};

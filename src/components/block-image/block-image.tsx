// Импортируем React и другие библиотеки
import React, { FC, useState } from 'react';

// Импортируем компоненты
import Modal from 'components/modal/modal';

// Импортируем таблицу стилей
import styles from './block-image.module.scss';

interface IBlockImage {
  src?: string;
  alt?: string;
}

// Компонент BlockImage принимает src (путь к изображению) и alt (альтернативный текст)
const BlockImage: FC<IBlockImage> = ({ src, alt }) => {
  // Состояние для открытия/закрытия модального окна
  const [openModal, setOpenModal] = useState(false);

  // Обработчик закрытия модального окна
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Обработчик открытия модального окна
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      {/* Контейнер для изображения с возможностью открытия модального окна по клику */}
      <img
        onClick={handleOpenModal}
        className={styles.content}
        src={src}
        alt={alt}
      />

      {/* Модальное окно, отображающее увеличенное изображение при открытии */}
      {openModal && (
        <Modal onClose={handleCloseModal}>
          <img className={styles.modal} src={src} alt={alt} />
        </Modal>
      )}
    </>
  );
};

export default BlockImage;

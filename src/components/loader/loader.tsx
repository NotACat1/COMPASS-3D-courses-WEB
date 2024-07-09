// Импортируем React
import React, { FC } from 'react';

// Импортируем таблицу стилей
import styles from './loader.module.scss';

// Компонент Loader представляет собой индикатор загрузки,
// который может использоваться в приложении для обозначения процесса ожидания данных.
const Loader: FC = () => {
  return (
    // Контейнер, оборачивающий индикатор загрузки.
    <div className={styles.container}>
      {/* Элемент, представляющий собой визуальный индикатор загрузки.
         Класс styles.container__loader определен в стилях компонента. */}
      <span className={styles.container__loader}></span>
    </div>
  );
};

export default Loader;

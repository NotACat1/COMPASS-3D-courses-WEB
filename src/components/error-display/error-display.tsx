// Импортируем React и другие библиотеки
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Импортируем компоненты
import SvgError from 'components/svg-error/svg-error';

// Импортируем константы и функции из утилитарного файла
import { defaultErrorMessage } from './error-display.utils';

// Импортируем таблицу стилей
import styles from './error-display.module.scss';

import { IError } from 'utils/interfaces/error';

interface IErrorDisplay {
  data?: IError;
}

// Компонент отображения информации об ошибке
const ErrorDisplay: FC<IErrorDisplay> = ({ data = defaultErrorMessage }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.block}>
          {/* Блок с изображением ошибки */}
          <div className={styles.block__image}>
            <SvgError extraClass={styles.image} />
            <span className={styles.image__text}>{data.code}</span>
          </div>

          {/* Блок с контентом ошибки */}
          <div className={styles.block__content}>
            {/* Заголовок ошибки */}
            <h1 className={styles.block__title}>{data.title}</h1>

            {/* Блок с информацией "Почему?" */}
            <section>
              <h2 className={styles.block__subtitle}>Почему?</h2>
              <p className={styles.block__description}>{data.description}</p>
            </section>

            {/* Блок с информацией "Что делать?" */}
            <section>
              <h2 className={styles.block__subtitle}>Что делать?</h2>
              <p className={styles.block__description}>
                Перейдите на нашу{' '}
                <Link className={styles.block__link} to="/">
                  главную страницу
                </Link>
                , которая точно существует.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorDisplay;

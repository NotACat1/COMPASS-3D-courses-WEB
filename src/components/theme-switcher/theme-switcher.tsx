// Импортируем React
import React, { FC } from 'react';

// Импортируем Redux
import { useDispatch } from 'services/hooks';
import { updateTheme } from 'services/actions/user';

// Подключение компонентов
import SvgTheme from 'components/svg-theme/svg-theme';

// Подключение стилей и данных
import styles from './theme-switcher.module.scss';

// Компонент переключения темы
const ThemeSwitcher: FC = () => {
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(updateTheme());
  };

  // Возвращаем кнопку с иконкой для переключения темы
  return (
    <button title="Смена темы" className={styles.button} onClick={changeTheme}>
      <SvgTheme extraClass={styles.button__image} />
    </button>
  );
};

export default ThemeSwitcher;

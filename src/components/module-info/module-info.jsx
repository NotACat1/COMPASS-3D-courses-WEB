// Импортируем React и другие библиотеки
import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Импортируем компоненты
import SvgStatus from '../svg-status/svg-status';

// Импортируем таблицу стилей
import styles from './module-info.module.scss';

// Компонент, отображающий информацию о модуле и список уроков
export default function ModuleInfo({ data, handleClick }) {
  // Извлекаем необходимые данные из пропсов
  const { title, description, lessons, id: moduleId } = data;

  // Функция для генерации класса NavLink в зависимости от активности
  const getNavLinkClassName = ({ isActive }) => {
    const baseClassName = styles.navigate__link;
    const activeClassName = styles.navigate__link_active;
    return `${baseClassName} ${isActive ? activeClassName : ''}`;
  };

  // Создаем список уроков с использованием useMemo для оптимизации производительности
  const lessonList = useMemo(
    () =>
      lessons.map(({ id: lessonId, title }, index) => {
        // Формируем путь к уроку
        const lessonPath = `lesson/${moduleId}/${lessonId}`;
        return (
          <li key={lessonId} className={styles.navigate__item}>
            {/* Кликабельная ссылка на урок с заданным обработчиком и классом */}
            <NavLink onClick={handleClick} className={getNavLinkClassName} to={lessonPath}>
              <h3 className={styles.navigate__title}>
                {/* Номер урока и его заголовок */}
                <span className={styles.navigate__marker}>{index + 1}.</span> {title}
              </h3>
              <SvgStatus data={{ module: moduleId, lesson: lessonId }} extraClass={styles.navigate__icon} />
            </NavLink>
          </li>
        );
      }),
    [lessons, moduleId, handleClick],
  );

  // Отображение информации о модуле и списке уроков
  return (
    <div className={styles.container}>
      {/* Заголовок модуля */}
      <h1 className={styles.container__title}>{title}</h1>
      {/* Описание модуля */}
      <p className={styles.container__text}>{description}</p>
      {/* Подзаголовок "Уроки" */}
      <h2 className={styles.container__subtitle}>Уроки</h2>
      {/* Навигационный список уроков */}
      <nav className={styles.container__navigate}>
        <ol className={styles.navigate}>{lessonList}</ol>
      </nav>
    </div>
  );
}

ModuleInfo.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

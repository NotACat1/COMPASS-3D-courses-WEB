// Импортируем React и другие библиотеки
import React, { FC, useState, useMemo } from 'react';

// Импортируем Redux
import { useSelector } from 'services/hooks';

// Подключение компонентов
import Modal from 'components/modal/modal';
import ModulInfo from 'components/module-info/module-info';

// Импортируем константы и функции из утилитарного файла
import { getLessonWord } from './module.utils';

// Импортируем таблицу стилей
import styles from './module.module.scss';
import { IModule } from 'utils/interfaces/module';

interface IModuleComponent {
  data: IModule;
}
// Компонент, представляющий модуль
const Module: FC<IModuleComponent> = ({ data }) => {
  const userProgress = useSelector(state => state.userData.progress);

  // Деструктуризация свойств объекта data
  const { icon, title, lessons, duration = '???', id: moduleId } = data;
  // Состояние для открытия/закрытия модального окна
  const [openModal, setOpenModal] = useState(false);

  // Вычисление прогресса с использованием useMemo
  const memoizedProgress = useMemo(() => {
    const completedLessons = lessons.reduce(
      (progress, { id: lessonId }) =>
        userProgress[moduleId]?.includes(lessonId) ? progress + 1 : progress,
      0,
    );
    return Math.round((completedLessons / lessons.length) * 100);
  }, [userProgress, moduleId, lessons]);

  // Закрытие модального окна
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Открытие модального окна
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Возвращаемый JSX
  return (
    <>
      {/* Элемент списка, обрабатывающий клик для открытия модального окна */}
      <li className={styles.container} onClick={handleOpenModal}>
        {/* Иконка модуля */}
        <img
          className={styles.container__icon}
          src={icon.path}
          alt={icon.caption}
        />
        {/* Контент модуля */}
        <div className={styles.container__content}>
          {/* Заголовок модуля */}
          <h3 className={styles.container__title}>{title}</h3>
          {/* Информация о количестве уроков и продолжительности */}
          <p className={styles.container__progress}>
            {/* Отображение количества уроков и соответствующего слова для уроков */}
            {lessons.length} {getLessonWord(lessons.length)} &asymp; {duration}{' '}
            мин.
          </p>
          {memoizedProgress > 0 && (
            <div className={styles.line}>
              <div
                className={styles.line__progress}
                style={{ width: `${memoizedProgress}%` }}
              ></div>
            </div>
          )}
        </div>
      </li>
      {/* Условный рендеринг модального окна */}
      {openModal && (
        <Modal onClose={handleCloseModal}>
          {/* Передача данных компоненту ModulInfo через props */}
          <ModulInfo data={data} />
        </Modal>
      )}
    </>
  );
};

export default Module;

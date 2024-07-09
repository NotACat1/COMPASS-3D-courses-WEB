// Импортируем React
import React, { FC, useMemo } from 'react';

// Импортируем Redux
import { useSelector } from 'services/hooks';

// Импортируем компоненты
import Module from 'components/module/module';
import SvgProgress from 'components/svg-progress/svg-progress';

// Импортируем константы и функции из утилитарного файла
import { calculateProgress } from './home.utils';

// Импортируем таблицу стилей
import styles from './home.module.scss';

// Компонент главной страницы
const HomePage: FC = () => {
  const allModules = useSelector(state => state.modulesData.modules); // Получаем массив модулей из состояния Redux
  const userProgress = useSelector(state => state.userData.progress); // Получаем прогресс пользователя из состояния Redux

  // Мемоизированный прогресс для оптимизации рендеринга
  const memoizedProgress = useMemo(
    () => calculateProgress(allModules, userProgress),
    [allModules, userProgress],
  );

  return (
    <>
      {/* Верхняя часть страницы */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Основы КОМПАС-3D{' '}
          {/* Компонент отображения прогресса с передачей стилей и значений */}
          <SvgProgress
            extraClass={styles.progress}
            extraTrackClass={styles.progress__track}
            extraBarClass={styles.progress__bar}
            progress={memoizedProgress}
          />{' '}
          {memoizedProgress}% {/* Отображение числового значения прогресса */}
        </h1>
      </div>

      {/* Секция с содержанием */}
      <section className={styles.content}>
        <h2 className={styles.content__title}>Программа курса</h2>
        {/* Отображение списка модулей */}
        <ul className={styles.content__list}>
          {allModules.map(moduleData => (
            <Module key={moduleData.id} data={moduleData} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default HomePage;

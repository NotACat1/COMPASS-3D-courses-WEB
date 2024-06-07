// Импортируем React и другие библиотеки
import React, { FC } from 'react';
import { LoaderFunction, useLoaderData, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Импортируем Redux
import { useSelector, useDispatch } from 'services/hooks';
import { updateModules } from 'services/actions/user';

// Импортируем компоненты
import BlockImage from 'components/block-image/block-image';
import BlockLink from 'components/block-link/block-link';
import BlockTable from 'components/block-table/block-table';

// Импортируем константы и функции из утилитарного файла
import { Api } from './lesson.utils';

// Импортируем таблицу стилей
import styles from './lesson.module.scss';

interface ILoaderData {
  lesson: string;
  moduleId: string;
  lessonId: string;
}

// Функция-загрузчик данных для страницы урока
export const loader: LoaderFunction = async ({
  params,
}): Promise<ILoaderData> => {
  try {
    // Извлечение параметров модуля и урока из запроса
    const moduleId = params.moduleId;
    const lessonId = params.lessonId;

    if (!moduleId || !lessonId) {
      throw new Response('', { status: 404 });
    }

    // Получение данных урока с использованием API
    const lesson = await Api.getLesson(moduleId, lessonId);

    // Возвращение данных урока, идентификатора модуля и урока
    return { lesson, moduleId, lessonId };
  } catch (error: any) {
    console.log(error);
    throw new Response('', { status: error.status });
  }
};

// Компонент страницы урока
const LessonPage: FC = () => {
  const dispatch = useDispatch();

  // Получение данных урока, идентификатора модуля и урока с использованием хука useLoaderData
  const { lesson, moduleId, lessonId } = useLoaderData() as ILoaderData;

  const handleClick = () => {
    // Отправка действия обновления прогресса в редукс
    dispatch(updateModules(moduleId, lessonId));
  };

  // Получение данных о модулях из состояния Redux
  const modulesData = useSelector(state => state.modulesData.modules);

  // Поиск текущего модуля по идентификатору
  const currentModule = modulesData.find(module => module.id === moduleId);

  if (!currentModule) return null;

  // Получение массива уроков текущего модуля
  const moduleLessons = currentModule?.lessons || [];

  // Поиск текущего урока по идентификатору
  const currentLesson = moduleLessons.find(lesson => lesson.id === lessonId);

  if (!currentLesson) return null;

  // Получение индексов текущего модуля и урока в соответствующих массивах
  const indexCurrentModule = modulesData.indexOf(currentModule);
  const indexCurrentLesson = moduleLessons.indexOf(currentLesson);

  // Определение является ли текущий модуль последним и является ли текущий урок последним в модуле
  const isLastModule =
    indexCurrentModule && indexCurrentModule === modulesData.length - 1;
  const isLastLesson =
    indexCurrentLesson && indexCurrentLesson === moduleLessons.length - 1;

  // Функция для определения следующей ссылки в зависимости от текущего состояния
  const getNextLink = () => {
    if (isLastModule && isLastLesson) {
      return { title: 'Вернуться на главную', path: '/' };
    }

    const nextModule = modulesData[indexCurrentModule + 1];

    if (isLastLesson) {
      // Если текущий урок последний, перейти к следующему модулю
      return {
        title: 'К следующему модулю',
        path:
          nextModule.id && nextModule.lessons[0].id
            ? `../../${nextModule.id}/${nextModule.lessons[0].id}`
            : '/',
      };
    }

    const nextLesson = moduleLessons[indexCurrentLesson + 1];

    // Если есть следующий урок в рамках текущего модуля, перейти к нему
    return {
      title: 'К следующему уроку',
      path: nextLesson.id ? `../${nextLesson.id}` : '/',
    };
  };

  // Получение данных следующей ссылки
  const { title, path } = getNextLink();

  // Возвращение разметки страницы урока
  return (
    <section>
      {/* Отображение содержимого урока */}
      <Markdown
        className={styles.content}
        remarkPlugins={[remarkGfm]}
        components={{ img: BlockImage, a: BlockLink, table: BlockTable }}
      >
        {lesson}
      </Markdown>

      {/* Ссылка для перехода на следующую страницу */}
      <Link
        onClick={handleClick}
        className={styles.link}
        to={path}
        relative="path"
      >
        {title}
      </Link>
    </section>
  );
};

export default LessonPage;

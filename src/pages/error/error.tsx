// Импортируем React
import React, { FC, useMemo } from 'react';
import { useRouteError } from 'react-router-dom';

// Импортируем компоненты
import ErrorDisplay from 'components/error-display/error-display';

// Импортируем константы и функции из утилитарного файла
import {
  statusSpecificErrorMessages,
  defaultErrorStatusMessages,
} from './error.utils';

// Компонент страницы ошибки
const ErrorPage: FC = () => {
  // Получаем информацию об ошибке из хука
  const error = useRouteError() as { status: number };

  // Создаем объект с данными об ошибке с использованием useMemo для оптимизации
  const errorData = useMemo(() => {
    // Проверяем наличие текста статуса ошибки
    if (error.status) {
      const data =
        statusSpecificErrorMessages[error.status] ||
        defaultErrorStatusMessages[Math.floor(error.status / 100) * 100];
      return {
        code: error.status,
        ...data,
      };
    }
    return undefined;
  }, [error]);

  // Рендер компонента отображения ошибки с переданными данными
  return <ErrorDisplay data={errorData} />;
};

export default ErrorPage;

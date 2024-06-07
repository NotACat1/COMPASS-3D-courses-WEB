// Импортируем React и другие библиотеки
import React, { FC } from 'react';

// Импортироввание интерфейсов
import { IIcon } from 'utils/interfaces/icon';

// Импортируем Redux
import { useSelector } from 'services/hooks';

interface ISvgStatus extends IIcon {
  data: {
    module: string;
    lesson: string;
  };
}

// Компонент SvgStatus, представляющий иконку в зависимости от прогресса пользователя
const SvgStatus: FC<ISvgStatus> = ({ data, extraClass }) => {
  // Получаем прогресс пользователя из состояния Redux с помощью хука useSelector
  const userProgress = useSelector(state => state.userData.progress);

  const { module, lesson } = data;

  // Проверяем, пройден ли урок пользователем, и отображаем соответствующую иконку
  if (userProgress[module]?.includes(lesson))
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={extraClass}
        viewBox="0 0 16 16"
      >
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
      </svg>
    );
  // Если урок не пройден, отображаем другую иконку
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={extraClass}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
      />
    </svg>
  );
};

export default SvgStatus;

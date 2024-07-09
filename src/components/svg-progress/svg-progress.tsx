// Импортируем React и другие библиотеки
import React, { FC } from 'react';

// Импортироввание интерфейсов
import { IIcon } from 'utils/interfaces/icon';

interface ISvgClose extends IIcon {
  extraTrackClass: string;
  extraBarClass: string;
  progress: number;
}

// Компонент SvgProgress представляет собой круговую диаграмму прогресса
const SvgClose: FC<ISvgClose> = ({
  extraClass,
  extraTrackClass,
  extraBarClass,
  progress = 0,
}) => {
  // Значение strokeDasharray используется для определения длины дуги круга
  const strokeDasharray = 69.115;

  return (
    <svg
      className={extraClass}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      {/* Круговая диаграмма для трека прогресса */}
      <circle
        className={extraTrackClass}
        cx="12"
        cy="12"
        r="11"
        strokeDasharray={strokeDasharray}
        strokeDashoffset="0"
        strokeWidth="2"
      ></circle>

      {/* Круговая диаграмма для бара прогресса с учетом значения progress */}
      <circle
        className={extraBarClass}
        cx="12"
        cy="12"
        r="11"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={(strokeDasharray * (100 - progress)) / 100}
        strokeWidth="2"
      ></circle>
    </svg>
  );
};

export default SvgClose;

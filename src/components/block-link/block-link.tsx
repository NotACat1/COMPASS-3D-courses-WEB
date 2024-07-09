// Импортируем React и другие библиотеки
import React, { FC } from 'react';

// Импортируем таблицу стилей
import styles from './block-link.module.scss';

interface IBlockLink {
  children?: React.ReactNode;
  href?: string;
}

// Компонент BlockLink принимает href (внешняя ссылка)
const BlockLink: FC<IBlockLink> = ({ children, href }) => {
  return (
    <a className={styles.link} target="_blank" href={href} rel="noreferrer">
      {children}
    </a>
  );
};

export default BlockLink;

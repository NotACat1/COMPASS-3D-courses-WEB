// Импортируем React и другие библиотеки
import React, { FC } from 'react';

// Импортируем таблицу стилей
import styles from './block-table.module.scss';

interface IBlockTable {
  children?: React.ReactNode;
}

// Компонент BlockTable
const BlockTable: FC<IBlockTable> = ({ children }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default BlockTable;

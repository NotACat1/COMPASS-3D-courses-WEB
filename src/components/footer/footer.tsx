// Импортируем React
import React, { FC, useMemo } from 'react';

// Импортируем константы и функции из утилитарного файла
import { contacts, formatPhoneNumber } from './footer.utils';

// Импортируем таблицу стилей
import styles from './footer.module.scss';

// Компонент Footer отображает информацию для связи и ссылки на социальные сети.
const Footer: FC = () => {
  // Мемоизированный массив элементов социальных медиа.
  const socialMediaItems = useMemo(() => {
    return contacts.socialMedia.map(({ platform, iconUrl, profilePath }) => (
      <li key={platform}>
        <a
          className={`${styles.contact} ${styles.contact_icon}`}
          href={profilePath}
          target="_blank"
          rel="noreferrer"
        >
          <img src={iconUrl} alt={platform} />
        </a>
      </li>
    ));
  }, [contacts.socialMedia]);

  return (
    <footer className={styles.container}>
      {/* Блок контактной информации */}
      <div className={styles.container__contacts}>
        {/* Ссылка на телефон */}
        <a
          className={`${styles.contact} ${styles.contact_text}`}
          href={`tel:${contacts.phoneNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          {formatPhoneNumber(contacts.phoneNumber)}
        </a>

        {/* Ссылка на электронную почту */}
        <a
          className={`${styles.contact} ${styles.contact_text}`}
          href={`mailto:${contacts.emailAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          {contacts.emailAddress}
        </a>
      </div>

      {/* Список социальных медиа */}
      <ul className={styles.container__media}>{socialMediaItems}</ul>
    </footer>
  );
};

export default Footer;

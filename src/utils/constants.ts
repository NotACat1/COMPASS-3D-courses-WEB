// Импорт изображений для контактов с различными социальными платформами
import githubContact from 'assets/images/social/github.svg';
import telegramContact from 'assets/images/social/telegram.svg';
import whatsappContact from 'assets/images/social/whatsapp.svg';

// Объект с контактной информацией
const CONTACTS = {
  phoneNumber: '89672482206',
  emailAddress: 'test@mail.com',
  socialMedia: [
    {
      platform: 'github', // Платформа - GitHub
      iconUrl: githubContact, // URL иконки GitHub
      profilePath: '', // Путь к профилю (пока не заполнен)
    },
    {
      platform: 'telegram', // Платформа - Telegram
      iconUrl: telegramContact, // URL иконки Telegram
      profilePath: '', // Путь к профилю (пока не заполнен)
    },
    {
      platform: 'whatsapp', // Платформа - WhatsApp
      iconUrl: whatsappContact, // URL иконки WhatsApp
      profilePath: '', // Путь к профилю (пока не заполнен)
    },
  ],
};

// Объект с различными темами
const THEMES = {
  light: 'light', // Светлая тема
  dark: 'dark', // Темная тема
};

// Объект для работы с локальным хранилищем
const LOCAL_STORAGE = {
  theme: 'theme', // Ключ для сохранения темы в локальном хранилище
  userProgress: 'userProgress',
};

// Класс для темной темы (используется в CSS)
const CLASS_DARK_THEME = 'dark';

const BASE_URL = 'https://raw.githubusercontent.com/NotACat1/COMPASS-3D-courses/gh-pages';

// Экспорт объектов и переменных для использования в других частях приложения
export { CONTACTS, THEMES, LOCAL_STORAGE, CLASS_DARK_THEME, BASE_URL };

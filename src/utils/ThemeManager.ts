import LocalStorageManager from 'utils/LocalStorageManager';
import { THEMES, LOCAL_STORAGE, CLASS_DARK_THEME } from 'utils/constants';

interface Theme {
  [key: string]: string;
}

class ThemeManager {
  localStorageManager: typeof LocalStorageManager;
  themes: Theme;
  storageKey: string;
  darkThemeClass: string;

  constructor(
    localStorageManager: typeof LocalStorageManager = LocalStorageManager,
    themes: Theme = THEMES,
    storageKey: string = LOCAL_STORAGE.theme,
    darkThemeClass: string = CLASS_DARK_THEME,
  ) {
    // Используем переданные аргументы или значения по умолчанию
    this.localStorageManager = localStorageManager;
    this.themes = themes;
    this.storageKey = storageKey;
    this.darkThemeClass = darkThemeClass;
  }

  // Инициализация темы при загрузке страницы
  initTheme(): string {
    // Получаем сохраненную тему из локального хранилища
    const storedTheme: string | null = this.localStorageManager.getItem(this.storageKey);
    // Определяем начальную тему или используем светлую тему по умолчанию
    const initialTheme: string = this.themes[storedTheme as string] || this.themes.light;

    // Устанавливаем тему
    this.setTheme(initialTheme);

    // Возвращаем начальную тему
    return initialTheme;
  }

  // Переключение между светлой и темной темой
  toggleTheme(): string {
    // Определяем текущую тему
    const currentTheme: string = document.body.classList.contains(this.darkThemeClass) ? this.themes.dark : this.themes.light;
    // Определяем следующую тему для переключения
    const nextTheme: string = currentTheme === this.themes.light ? this.themes.dark : this.themes.light;

    // Устанавливаем класс темы для body
    document.body.className = nextTheme === this.themes.dark ? this.darkThemeClass : '';
    // Сохраняем тему в локальное хранилище
    this.localStorageManager.setItem(this.storageKey, nextTheme);

    // Возвращаем следующую тему
    return nextTheme;
  }

  // Установка конкретной темы
  setTheme(theme: string): void {
    // Устанавливаем класс темы для body
    document.body.className = theme === this.themes.dark ? this.darkThemeClass : '';
    // Сохраняем тему в локальное хранилище
    this.localStorageManager.setItem(this.storageKey, theme);
  }

  // Получение текущей темы
  getTheme(defaultTheme: string = this.themes.light): string {
    // Получаем сохраненную тему из локального хранилища или используем тему по умолчанию
    return this.localStorageManager.getItem(this.storageKey) || defaultTheme;
  }
}

// Экспортируем экземпляр класса ThemeManager
export default new ThemeManager();

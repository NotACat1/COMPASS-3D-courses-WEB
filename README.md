![Домашняя страница](https://github.com/NotACat1/COMPASS-3D-courses-WEB/assets/113008873/3717b89b-0cec-4f66-8f84-3a6a0d661b23)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# Веб-сайт по курсам "Компас 3D"

Добро пожаловать в веб-платформу по обучению использованию программы "Компас 3D". Наш проект призван предоставить пользователям полноценный доступ к образовательным курсам, материалам и ресурсам, специально разработанным для усвоения навыков работы с программой "Компас 3D".

## Основная цель

**Цель нашего веб-сайта - сделать процесс изучения "Компас 3D" удобным, эффективным и интересным**. Мы предоставляем структурированные курсы и обучающие материалы, которые позволяют пользователям освоить основы и продвинутые возможности этой мощной программы для 3D-моделирования.

## Инструкция по установке и сборке

Эта инструкция предназначена для разработчиков и технических специалистов, которые хотят установить и собрать проект "Веб-сайт по курсам "Компас 3D"" на своем локальном устройстве.

### Предварительные требования

1. **Node.js и npm:** убедитесь, что на вашем компьютере установлен `Node.js` и `npm`. Вы можете скачать их с [официального сайта Node.js](https://nodejs.org/).
2. **Git:** установите `Git` для клонирования репозитория и управления версиями. Вы можете загрузить его с [официального сайта Git](https://git-scm.com/).

### Установка

1. **Клонирование репозитория:** в терминале выполните команду для клонирования репозитория на вашу локальную машину:

```bash
git clone https://github.com/NotACat1/COMPASS-3D-courses.git
```

2. **Переход в директорию проекта:** перейдите в директорию проекта:

```bash
cd ваш-путь-к-репозиторию/COMPASS-3D-courses
```

3. **Установка зависимостей:** выполните команду для установки зависимостей проекта:

```bash
npm install
```

### Сборка и Запуск

1. **Запуск локального сервера:** для запуска локального сервера разработки выполните:

```bash
npm start
```

Это запустит приложение и откроет его в вашем браузере по адресу [http://localhost:3000](http://localhost:3000).

2. **Сборка проекта:** если вы готовы развернуть проект на сервере, выполните команду для создания оптимизированной для продакшена сборки:

```bash
npm run build
```

Сборка будет размещена в папке `build`.

### Дополнительные команды

1. **Развертывание на GitHub Pages:** если вам нужно развернуть проект на `GitHub Pages`, используйте команду:

```bash
npm run deploy
```

Это предполагает, что у вас есть репозиторий на `GitHub` и вы настроили его для использования `GitHub Pages`.

2. **Установка Git Hooks:** для установки `git hooks` (`Husky`) и необходимых прав выполните:

```bash
npm run husky-inst
```

Эта команда устанавливает и настраивает `Husky` для автоматизации проверок при коммите.

Теперь у вас должны быть удовлетворены все предварительные требования, и вы готовы устанавливать, разрабатывать и разворачивать проект по курсам "Компас 3D".

## Файловая система проекта

```css
./
  .husky/                    // Папка для настроек Husky (pre-commit и commit-msg hooks)
    commit-msg               // Скрипт для проверки сообщения коммита
    pre-commit               // Скрипт для запуска перед коммитом

  build/                     // Папка для сборки проекта (появится после выполнения команды сборки)

  public/                    // Папка для статических ресурсов, доступных напрямую из браузера
    apple-touch-icon.png     // Иконка для устройств Apple с Retina-экранами
    favicon.ico              // Иконка, отображаемая во вкладке браузера
    icon-192.png             // Иконка размером 192x192 пикселя (используется для PWA)
    icon-512.png             // Иконка размером 512x512 пикселей (используется для PWA)
    icon.png                 // Основная иконка приложения
    index.html               // Главная HTML-страница приложения
    logo192.png              // Логотип размером 192x192 пикселя (используется для PWA)
    logo512.png              // Логотип размером 512x512 пикселей (используется для PWA)
    manifest.json            // Файл манифеста для Progressive Web App (PWA)
    robots.txt               // Файл, используемый для указания правил поисковым роботам
    tableau.png              // Пример изображения для закладок браузеров

  src/                       // Исходный код проекта
    assets/                  // Ресурсы проекта
      fonts/                 // Шрифты проекта
      images/                // Изображения и другие медиафайлы

    components/              // Компоненты приложения
      app/                   // Основной компонент приложения
      block-image/           // Компонент блока с изображением
      block-link/            // Компонент блока с ссылкой
      block-table/           // Компонент блока с таблицей
      error-display/         // Компонент отображения ошибок
      footer/                // Компонент подвала страницы
      header/                // Компонент шапки страницы
      loader/                // Компонент загрузки данных
      modal/                 // Компонент модального окна
      modal-overlay/         // Компонент оверлея для модальных окон
      module/                // Компонент модуля
      module-info/           // Компонент информации о модуле
      svg-close/             // Компонент SVG-иконки "закрыть"
      svg-error/             // Компонент SVG-иконки "ошибка"
      svg-home/              // Компонент SVG-иконки "домой"
      svg-modules/           // Компонент SVG-иконки "модули"
      svg-progress/          // Компонент SVG-иконки "прогресс"
      svg-status/            // Компонент SVG-иконки "статус урока"
      svg-theme/             // Компонент SVG-иконки "тема"
      theme-switcher/        // Компонент переключателя темы

    pages/                   // Страницы приложения
      error/                 // Страница отображения ошибок
      home/                  // Главная страница
      lesson/                // Страница отображения урока
      root/                  // Корневая страница

    scss/                    // Файлы стилей проекта
      mixins/                // SCSS-миксины
      varibles/              // Переменные для стилей

    services/                // Сервисы приложения
      actions/               // Действия (actions) Redux
      middleware/            // Middleware для Redux
      reducers/              // Редукторы (reducers) Redux
      types/                 // Типы данных для Redux
      store.js               // Конфигурация Redux Store

    utils/                   // Утилиты и вспомогательные функции
      ApiService.js          // Класс для работы с API
      constants.js           // Константы проекта
      LocalStorageManager.js // Управление LocalStorage
      ThemeManager.js        // Управление темой приложения
      UserProgressManager.js // Управление прогрессией студентов

    index.js                 // Точка входа в приложение
    index.scss               // Главный файл стилей приложения
    reportWebVitals.js       // Отчет о веб-виталах
    setupTests.js            // Настройка тестов

  .editorconfig              // Конфигурация редактора кода, обеспечивающая единообразие стиля кодирования
  .eslintrc.json             // Конфигурация ESLint для статического анализа кода
  .gitignore                 // Игнорируемые файлы и директории для Git
  .prettierrc.json           // Конфигурация Prettier для форматирования кода
  .stylelintrc.json          // Конфигурация Stylelint для проверки стилей CSS/SCSS
  commitlint.config.js       // Конфигурация Commitlint для проверки сообщений коммитов
  htmlhint.json              // Конфигурация HTMLHint для статической проверки HTML
  package-lock.json          // Фиксированные версии зависимостей (генерируется автоматически)
  package.json               // Файл с метаданными проекта и зависимостями
  README.md                  // Файл с описанием проекта, инструкциями по установке и использованию
```

## Реализованный функционал

### 1. Кнопка смены темы

Добавлена интерактивная кнопка, позволяющая пользователям переключаться между светлой и темной темами. Реализован механизм сохранения выбранной темы в `LocalStorage` для сохранения пользовательских предпочтений даже после перезагрузки страницы.

![Светлая и темная тема](https://github.com/NotACat1/COMPASS-3D-courses-WEB/assets/113008873/9a6c7e07-fe3d-4f74-8eeb-c98a890f69cc)

### 2. Адаптивный дизайн

Веб-сайт обладает адаптивным дизайном, что означает оптимальное отображение и удобство использования на устройствах различных размеров, включая компьютеры, планшеты и смартфоны.

![Адаптивный дизайн](https://github.com/NotACat1/COMPASS-3D-courses-WEB/assets/113008873/0a0683f1-2e5f-4751-b7c1-54032fc0e9a4)

### 3. Модальные окна

Используются модальные окна для удобного отображения дополнительной информации. В частности, модальные окна открываются при просмотре списка уроков модуля и при просмотре изображений, обеспечивая удобное взаимодействие пользователя с контентом.

![Модальные окна](https://github.com/NotACat1/COMPASS-3D-courses-WEB/assets/113008873/4b3f2251-9e9a-4d43-85d4-a4ca0680588b)

### 4. Удобный объект по работе с LocalStorage

Создан удобный объект, который предоставляет абстракцию для взаимодействия с `LocalStorage`. Этот объект обеспечивает простой доступ к методам чтения, записи и удаления данных, упрощая работу с локальным хранилищем.

```js
// src/utils/LocalStorageManager.js

const LocalStorageManager = {
  // Добавление данных в Local Storage
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true; // Успешно добавлено
    } catch (error) {
      console.error('Error настройки элемента в Local Storage:', error);
      return false; // Ошибка при добавлении
    }
  },

  // Получение данных из Local Storage
  getItem: key => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error при получении элемента из Local Storage:', error);
      return null;
    }
  },

  // Удаление данных из Local Storage
  removeItem: key => {
    try {
      localStorage.removeItem(key);
      return true; // Успешно удалено
    } catch (error) {
      console.error('Error при удалении элемента из Local Storage:', error);
      return false; // Ошибка при удалении
    }
  },
};
```

#### Описание методов

1. `setItem(key, value)`: добавляет данные в `Local Storage`. Принимает ключ (`key`) и значение (`value`). Данные конвертируются в `JSON-строку` перед сохранением. Возвращает `true` при успешном добавлении и `false` в случае ошибки.
2. `getItem(key)`: получает данные из `Local Storage` по ключу. Если данные существуют, они распаковываются из `JSON`. Возвращает полученные данные или `null` в случае ошибки.
3. `removeItem(key)`: удаляет данные из `Local Storage` по ключу. Возвращает `true` при успешном удалении и `false` в случае ошибки.

### 5. Удобный класс по работе со сменой темы

Разработан класс, предоставляющий удобные методы для смены темы оформления веб-сайта. Это включает в себя функционал изменения стилей, сохранение выбранной темы и мгновенное применение изменений.

```js
// src/utils/ThemeManager.js

class ThemeManager {
  constructor(
    localStorageManager = LocalStorageManager,
    themes = THEMES,
    storageKey = LOCAL_STORAGE.theme,
    darkThemeClass = CLASS_DARK_THEME,
  ) {
    // Используем переданные аргументы или значения по умолчанию
    this.localStorageManager = localStorageManager;
    this.themes = themes;
    this.storageKey = storageKey;
    this.darkThemeClass = darkThemeClass;
  }

  // Инициализация темы при загрузке страницы
  initTheme() {
    // Получаем сохраненную тему из локального хранилища
    const storedTheme = this.localStorageManager.getItem(this.storageKey);
    // Определяем начальную тему или используем светлую тему по умолчанию
    const initialTheme = this.themes[storedTheme] || this.themes.light;

    // Устанавливаем тему
    this.setTheme(initialTheme);

    // Возвращаем начальную тему
    return initialTheme;
  }

  // Переключение между светлой и темной темой
  toggleTheme() {
    // Определяем текущую тему
    const currentTheme = document.body.classList.contains(this.darkThemeClass)
      ? this.themes.dark
      : this.themes.light;
    // Определяем следующую тему для переключения
    const nextTheme =
      currentTheme === this.themes.light ? this.themes.dark : this.themes.light;

    // Устанавливаем класс темы для body
    document.body.className =
      nextTheme === this.themes.dark ? this.darkThemeClass : '';
    // Сохраняем тему в локальное хранилище
    this.localStorageManager.setItem(this.storageKey, nextTheme);

    // Возвращаем следующую тему
    return nextTheme;
  }

  // Установка конкретной темы
  setTheme(theme) {
    // Устанавливаем класс темы для body
    document.body.className =
      theme === this.themes.dark ? this.darkThemeClass : '';
    // Сохраняем тему в локальное хранилище
    this.localStorageManager.setItem(this.storageKey, theme);
  }

  // Получение текущей темы
  getTheme(defaultTheme = this.themes.light) {
    // Получаем сохраненную тему из локального хранилища или используем тему по умолчанию
    return this.localStorageManager.getItem(this.storageKey) || defaultTheme;
  }
}
```

#### Описание методов

1. `initTheme()`: инициализирует тему при загрузке страницы. Получает сохраненную тему из локального хранилища, устанавливает начальную тему и возвращает ее.
2. `toggleTheme()`: переключает между светлой и темной темой. Определяет текущую тему, определяет следующую тему для переключения, устанавливает соответствующий класс темы для `body` и сохраняет тему в локальное хранилище.
3. `setTheme(theme)`: устанавливает конкретную тему. Устанавливает соответствующий класс темы для `body` и сохраняет тему в локальное хранилище.
4. `getTheme(defaultTheme)`: получает текущую тему. Получает сохраненную тему из локального хранилища или использует тему по умолчанию, если сохраненная тема отсутствует.

### 6. Хранение прогрессии студентов в LocalStorage

Реализован механизм хранения прогрессии студентов в `LocalStorage`. Это позволяет сохранять достижения студентов, например, пройденные уроки или выполненные задания, даже после закрытия браузера.

```js
// src/utils/UserProgressManager.js

class UserProgressManager {
  // Конструктор класса
  constructor(
    localStorageManager = LocalStorageManager,
    storageKey = LOCAL_STORAGE.userProgress,
  ) {
    // Используем переданные аргументы или значения по умолчанию
    this.localStorageManager = localStorageManager; // Менеджер локального хранилища
    this.storageKey = storageKey; // Ключ хранения данных прогресса пользователя
    this.userProgress = this.loadProgress(); // Загружаем прогресс пользователя из локального хранилища
  }

  // Метод для загрузки прогресса пользователя из локального хранилища
  loadProgress() {
    const progressData = this.localStorageManager.getItem(this.storageKey);
    return progressData ? progressData : {}; // Возвращаем объект прогресса или пустой объект
  }

  // Метод для сохранения прогресса пользователя в локальное хранилище
  saveProgress() {
    this.localStorageManager.setItem(this.storageKey, this.userProgress);
  }

  // Метод для обновления прогресса пользователя при прохождении урока
  updateProgress(moduleId, lessonId) {
    // Если нет записи для модуля, создаем массив
    if (!this.userProgress[moduleId]) {
      this.userProgress[moduleId] = [];
    }

    // Если урок еще не отмечен как пройденный, добавляем его и сохраняем прогресс
    if (!this.userProgress[moduleId].includes(lessonId)) {
      this.userProgress[moduleId].push(lessonId);
      this.saveProgress();
    }
  }

  // Метод для получения прогресса пользователя по конкретному модулю
  getProgressForModule(moduleId) {
    return this.userProgress[moduleId] || []; // Возвращаем массив пройденных уроков для модуля
  }
}
```

#### Описание методов

1. `loadProgress()`: метод для загрузки прогресса пользователя из локального хранилища. Возвращает объект прогресса, если он есть, или пустой объект.
2. `saveProgress()` метод для сохранения текущего прогресса пользователя в локальное хранилище. Использует `JSON-сериализацию`.
3. `updateProgress(moduleId, lessonId)`: метод для обновления прогресса пользователя при прохождении урока. Проверяет, есть ли запись для модуля, создает массив, если необходимо, и добавляет урок в массив, если его там еще нет. Затем вызывает `saveProgress()` для сохранения изменений.
4. `getProgressForModule(moduleId)`: метод для получения прогресса пользователя по конкретному модулю. Возвращает массив пройденных уроков для данного модуля или пустой массив, если прогресса нет.

### 7. Удобный класс по работе с API

Класс `ApiService` предназначен для удобного взаимодействия с `API` и выполнения `HTTP-запросов`. Он содержит методы для получения данных по модулям и урокам в рамках курсов "Компас 3D".

```js
// src/utils/ApiService.js

class ApiService {
  constructor(url) {
    this._baseUrl = url;
  }

  // Обработка ответа от сервера
  _checkResponseStatus(response) {
    if (!response.ok) {
      throw new Response('', { status: response.status });
    }
  }

  // Получение данных по модулям
  async getModules() {
    try {
      const response = await fetch(`${this._baseUrl}/index.json`);
      this._checkResponseStatus(response);
      const modulesData = await response.json();
      return modulesData;
    } catch (error) {
      // Обработка ошибки при получении данных по модулям
      throw new Response('', { status: error.status });
    }
  }

  // Получение данных по уроку в рамках модуля
  async getLesson(module, lesson) {
    try {
      const response = await fetch(`${this._baseUrl}/${module}/${lesson}`);
      this._checkResponseStatus(response);
      const lessonData = await response.text();
      return lessonData;
    } catch (error) {
      // Обработка ошибки при получении данных по уроку
      throw new Response('', { status: error.status });
    }
  }
}
```

#### Описание методов

1. `_checkResponseStatus(response)`: приватный метод для проверки статуса ответа от сервера. Если статус не является успешным (не в диапазоне 200-299), генерируется исключение.
2. `getModules()`: метод для получения данных по модулям. Выполняет запрос к `API`, обрабатывает ответ и возвращает данные в формате `JSON`.
   `getLesson(module, lesson)`: метод для получения данных по уроку в рамках модуля. Отправляет запрос к `API`, обрабатывает ответ и возвращает данные в виде текста.

### 8. Использование React Router Dom v6

Для организации навигации в веб-приложении используется библиотека `React Router Dom` в версии 6. Это обеспечивает удобство работы с маршрутами и обеспечивает плавные переходы между страницами.

```js
// src/components/app/app.utils.js

const router = createHashRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'lesson/:moduleId/:lessonId',
        loader: lessonLoader,
        element: <LessonPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
```

### 9. Redux хранилище и связь с LocalStorage

1. **Reducer для управления состоянием модулей**: `reducer` управляет состоянием, связанным с данными модулей. В данном случае, обрабатывает действие `UPDATE_MODULES`, обновляя список модулей в хранилище.

```js
// src/services/reducers/modules.js

// Начальное состояние хранилища
const initialState = {
  modules: [],
};

// Редуктор для управления состоянием хранилища
const modulesReducer = (state = initialState, { type, payload }) => {
  // Обработка различных действий
  switch (type) {
    case UPDATE_MODULES: {
      return {
        ...state,
        modules: [...payload],
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};
```

2. **Reducer для управления состоянием пользователя**: `reducer` управляет состоянием пользователя. Обрабатывает действия обновления прогресса (`UPDATE_PROGRESS`) и темы (`UPDATE_THEME`). Инициализирует начальное состояние с данными, загруженными из `UserProgressManager` и `ThemeManager`.

```js
// src/services/reducers/user.js

// Начальное состояние хранилища
const initialState = {
  progress: UserProgressManager.loadProgress(),
  theme: ThemeManager.initTheme(),
};

// Редуктор для управления состоянием хранилища
const userReducer = (state = initialState, { type, payload }) => {
  // Обработка различных действий
  switch (type) {
    case UPDATE_PROGRESS: {
      const { module, lesson } = payload;
      return {
        ...state,
        progress: {
          ...state.progress,
          [module]: [...(state.progress[module] || []), lesson],
        },
      };
    }
    case UPDATE_THEME: {
      return {
        ...state,
        theme: ThemeManager.getTheme(),
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};
```

3. **Корневой Reducer**: корневой редюсер объединяет все редюсеры приложения - `modulesReducer` и `userReducer`.

```js
// src/services/reducers/index.js

// Корневой редюсер, объединяющий все редюсеры
export const rootReducer = combineReducers({
  modulesData: modulesReducer,
  userData: userReducer,
});
```

4. **Middleware для управления состоянием пользователя**: `middleware`, предназначенный для управления состоянием пользователя. Обрабатывает действия обновления прогресса и темы, вызывая соответствующие методы из `UserProgressManager` и `ThemeManager`.

```js
// src/services/middleware/userMiddleware.js

// Middleware для управления состоянием пользователя
const userMiddleware = store => next => action => {
  // Передача действия следующему обработчику в цепочке middleware
  next(action);

  // Обработка действия обновления прогресса
  if (action.type === UPDATE_PROGRESS) {
    // Вызываем метод updateProgress из UserProgressManager с передачей данных о модуле и уроке
    UserProgressManager.updateProgress(
      action.payload.module,
      action.payload.lesson,
    );
  }

  // Обработка действия обновления темы
  if (action.type === UPDATE_THEME) {
    // Вызываем метод toggleTheme из ThemeManager для переключения темы
    ThemeManager.toggleTheme();
  }
};
```

#### Связь с LocalStorage

- В редукторе `userReducer` происходит загрузка прогресса пользователя и темы из `LocalStorage` через `UserProgressManager.loadProgress()` и `ThemeManager.initTheme()` соответственно.
- В `middleware` `userMiddleware` обновление прогресса пользователя вызывает метод `UserProgressManager.updateProgress`, который также обновляет данные в `LocalStorage`.
- В `middleware` `userMiddleware` обновление темы вызывает метод `ThemeManager.toggleTheme`, который также обновляет тему в `LocalStorage`.

Такая структура обеспечивает согласованность данных в хранилище `Redux` и `LocalStorage`, позволяя приложению сохранять данные пользователя между сеансами использования.

### 10. Стильсистема с помощью SCSS

Структура стилей в проекте основана на модульности и использовании `SCSS` для удобного оформления и поддержки. Файловая система `SCSS` разделена на несколько директорий:

- **mixins**: содержит миксины, предназначенные для управления различными стилями, такими как ширина блока, медиазапросы, сброс свойств и другие.
- **variables**: здесь определены переменные для использования в стилях. Это включает в себя переменные для радиуса скругления углов, контрольных точек медиазапросов, максимальной ширины контейнера, шрифтов и другие.

```bash
/src
  /scss
    /mixins
      _container.scss   // Определение максимальной ширины блока в зависимости от контрольных точек
      _media.scss       // Определение медиазапросов в зависимости от контрольных точек
      _reset.scss       // Сброс CSS свойств
      _scrollbar.scss   // Стилизация полосы прокрутки
      _typography.scss  // Стили для текстового оформления
    /variables
      _border-radius.scss   // Определение переменных для радиуса скругления углов
      _breakpoints.scss     // Определение контрольных точек для медиазапросов
      _container.scss       // Определение максимальной ширины контейнера
      _fonts.scss           // Определение переменных для шрифтов
      _opacity.scss         // Определение переменных для прозрачности
      _transitions.scss     // Определение переменных для переходов (анимаций)
      _z-index.scss         // Определение переменных для уровней z-index
```

Комбинация миксинов и переменных обеспечивает гибкость и удобство в поддержке стилей приложения. Каждый файл имеет свою определенную роль, что облегчает чтение, понимание и модификацию стилей при необходимости.

Этот функционал создает приятное и интуитивно понятное взаимодействие пользователя с веб-сайтом, обеспечивая одновременно удобство, функциональность и персонализированный опыт.

## Скрипты

В файле `package.json` определены следующие скрипты для управления различными аспектами проекта:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "husky-inst": "npx husky install && chmod +x .husky/pre-commit .husky/commit-msg",
  "msg-commit": "npx commitlint -E HUSKY_GIT_PARAMS",
  "pre-commit": "npx lint-staged"
}
```

1. **start:** запускает локальный сервер для разработки. Вам нужно выполнить `npm start`, чтобы начать разработку и просмотреть результат в браузере.
2. **build:** создает оптимизированную для продакшена сборку проекта. Команда `npm run build` генерирует статические файлы, готовые к развертыванию на хостинге.
3. **test:** запускает тесты. Эта команда (`npm test`) используется для выполнения тестов, которые обеспечивают стабильность функционала.
4. **eject:** извлекает конфигурации и скрипты из Create React App, предоставляя полный контроль над конфигурацией проекта.
5. **predeploy:** cкрипт, выполняющий предварительные действия перед развертыванием, в данном случае, выполняет сборку проекта.
6. **deploy:** публикует сборку на GitHub Pages. Команда `npm run deploy` использует `gh-pages` для автоматической публикации содержимого папки `build` на GitHub Pages.
7. **husky-inst:** устанавливает и настраивает `Husky`, инструмент для предотвращения плохих коммитов, и делает необходимые скрипты исполняемыми.
8. **msg-commit:** проверяет сообщение коммита с использованием `commitlint`. Этот скрипт вызывается при фиксации изменений и обеспечивает соблюдение структуры коммит-сообщений.
9. **pre-commit:** запускает предварительные проверки перед коммитом с использованием `lint-staged`. Этот скрипт автоматически проверяет измененные файлы на соответствие стандартам.

Эти скрипты помогают автоматизировать и облегчить различные этапы разработки, обеспечивая при этом высокое качество и согласованность в проекте.

## Страницы проекта

### Страница ошибки

Страница ошибки ("Error") представляет собой компонент, отвечающий за отображение информации об ошибке. Эта страница может быть использована для информирования пользователя о различных ситуациях, когда что-то идет не так в приложении.

![Страница ошибки](https://github.com/NotACat1/COMPASS-3D-courses-WEB/assets/113008873/8eeee1f4-5525-4c8f-bfd7-ae2bbdcd32d9)

```jsx
// src/pages/error/error.jsx

// Компонент страницы ошибки
export default function ErrorPage() {
  // Получаем информацию об ошибке из хука
  const error = useRouteError();

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
    return null;
  }, [error.statusText]);

  // Рендер компонента отображения ошибки с переданными данными
  return <ErrorDisplay data={errorData} />;
}
```

_Комментарии_:

- Хук `useRouteError`: используется для получения информации об ошибке из маршрута (роута) страницы.
- Хук `useMemo`: применяется для оптимизации создания объекта с данными об ошибке. Предотвращает избыточные вычисления при изменении зависимостей.
- Объект `errorData`: создается с использованием данных из хука об ошибке. Включает код ошибки (`code`) и текстовое описание ошибки, определенное в соответствии с `HTTP-статусом`.
  Рендер компонента `ErrorDisplay`: используется компонент `ErrorDisplay` для отображения информации об ошибке. Передаются данные об ошибке для корректного отображения пользователю.

### Домашняя страница

Домашняя страница ("Home") предназначена для отображения информации об ошибках, которые могут возникнуть в процессе работы приложения. Она предоставляет пользователю информацию о возможных причинах ошибки и, при необходимости, указания по ее устранению.

![Домашняя страница](https://github.com/NotACat1/COMPASS-3D-courses-WEB/assets/113008873/3717b89b-0cec-4f66-8f84-3a6a0d661b23)

```jsx
// Компонент главной страницы
export default function HomePage() {
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
          /> {memoizedProgress}% {/* Отображение числового значения прогресса */}
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
}
```

### Страница урока

Страница урока ("Lesson") представляет собой страницу отображения конкретного урока в рамках выбранного модуля. Страница разработана для предоставления пользователю учебного материала и позволяет им взаимодействовать с контентом, а также обеспечивает возможность навигации между уроками и модулями.

![Страница урока](https://github.com/NotACat1/COMPASS-3D-courses-WEB/assets/113008873/549c0083-1343-47b0-bd61-bad48e066ba4)

#### Загрузчик данных (`loader`)

Отвечает за загрузку данных урока с использованием `API`. Извлекает параметры модуля и урока из запроса, а затем возвращает данные урока, идентификатор модуля и урока.

```jsx
// src\pages\lesson\lesson.jsx

export async function loader({ params }) {
  try {
    // Извлечение параметров модуля и урока из запроса
    const moduleId = params.moduleId;
    const lessonId = params.lessonId;

    // Получение данных урока с использованием API
    const lesson = await Api.getLesson(moduleId, lessonId);

    // Возвращение данных урока, идентификатора модуля и урока
    return { lesson, moduleId, lessonId };
  } catch (error) {
    // Обработка ошибки и создание кастомного объекта Response
    throw new Response('', { status: error.status });
  }
}
```

#### Компонент страницы урока (`LessonPage`)

Отображает содержимое урока, а также предоставляет пользователю возможность перейти к следующему уроку или модулю. Содержит следующие ключевые элементы:

- `handleClick`: обработчик события клика, который отправляет действие обновления прогресса в `Redux`.
- `useLoaderData`: хук, используемый для получения данных урока, идентификатора модуля и урока.
- `getNextLink`: функция для определения следующей ссылки в зависимости от текущего состояния (является ли текущий модуль или урок последним).
- `title` и `path`: данные следующей ссылки, используемые для отображения кнопки перехода.
- `Markdown`: компонент для рендеринга текста урока с использованием синтаксиса `Markdown`.
- `Link`: компонент для создания ссылки, обеспечивает навигацию на следующую страницу.
- Дополнительные проверки и вычисления: определение текущего модуля, урока, индексов в массивах, а также определение, является ли текущий модуль или урок последним.

```jsx
// src\pages\lesson\lesson.jsx

export default function LessonPage() {
  const dispatch = useDispatch();

  // Получение данных урока, идентификатора модуля и урока с использованием хука useLoaderData
  const { lesson, moduleId, lessonId } = useLoaderData();

  const handleClick = () => {
    // Отправка действия обновления прогресса в редукс
    dispatch(updateModules(moduleId, lessonId));
  };

  // Получение данных о модулях из состояния Redux
  const modulesData = useSelector(state => state.modulesData.modules);

  // Поиск текущего модуля по идентификатору
  const currentModule = modulesData.find(module => module.id === moduleId);

  // Получение массива уроков текущего модуля
  const moduleLessons = currentModule?.lessons || [];

  // Поиск текущего урока по идентификатору
  const currentLesson = moduleLessons.find(lesson => lesson.id === lessonId);

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
        components={{
          img: BlockImage,
          a: BlockLink,
        }}
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
}
```

### Корневая страница

Корневая страница ("Root") представляет собой корневую страницу приложения, на которой отображается основное содержимое приложения. Она служит в качестве точки входа для пользователя и предоставляет навигацию к различным модулям и урокам.

#### Загрузчик данных (`loader`)

- Загрузчик данных (`loader`) представляет собой асинхронную функцию, которая выполняется при инициализации страницы.
- В данном случае, загрузчик вызывает метод `Api.getModules()`, который получает данные по модулям из внешнего источника (например, с сервера).
- Полученные данные по модулям передаются в объекте `{ modules }`.

```jsx
// src/pages/root/root.jsx

export async function loader() {
  try {
    const modules = await Api.getModules();
    return { modules };
  } catch (error) {
    throw new Response('', { status: error.status });
  }
}
```

#### Компонент страницы урока (`RootPage`)

- Компонент `RootPage` является функциональным компонентом `React`.
- Используются хуки `useDispatch`, `useLoaderData`, `useNavigation`, и `useSelector` для управления состоянием и навигацией.
- В компоненте реализовано обновление данных о модулях в `Redux Store` при монтировании компонента.
- Используется маршрутизация через `Outlet` для внутреннего контента.
- Динамически применяются стили (`styles.container` и `styles.container_lesson`) в зависимости от текущего пути.

```jsx
// src/pages/root/root.jsx

export default function RootPage() {
  const dispatch = useDispatch();
  const { modules } = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();

  const allModules = useSelector(state => state.modulesData.modules);

  // Обновление модулей в хранилище при монтировании компонента
  useEffect(() => {
    dispatch(updateModules(modules));
  }, [dispatch]);

  return (
    <div
      className={`${styles.container} ${location.pathname !== '/' && styles.container_lesson}`}
    >
      {/* Верхняя часть страницы: хедер */}
      <Header />
      {/* Основное содержимое страницы */}
      <main className={styles.content}>
        {/* Маршрутизация внутреннего контента через Outlet */}
        {(navigation.state === 'loading' || allModules.length === 0) && (
          <Loader />
        )}
        {navigation.state !== 'loading' && allModules.length > 0 && <Outlet />}
      </main>
      {/* Нижняя часть страницы: футер */}
      {location.pathname === '/' && <Footer />}
      <ThemeSwitcher />
    </div>
  );
}
```

## Технологии

Проект "Веб-сайт по курсам Компас 3D" использует современные технологии для обеспечения эффективности, интерактивности и стильного дизайна. Вот подробное описание используемых технологий:

### Основные библиотеки и фреймворки

1. **React:**
   - **Описание:** `React` - это `JavaScript-библиотека` для разработки пользовательских интерфейсов. Она позволяет создавать динамичные и отзывчивые веб-приложения.
   - **Применение в проекте:** `React` используется для построения пользовательского интерфейса веб-сайта, обеспечивая быстрое реагирование на действия пользователя.
2. **Redux:**
   - **Описание:** `Redux` - это библиотека для управления состоянием приложения в `JavaScript`. Она обеспечивает предсказуемость и структурированность в управлении данными.
   - **Применение в проекте:** `Redux` используется для эффективного управления состоянием приложения, особенно в контексте обучающих курсов.
3. **SCSS:**
   - **Описание:** `Sass` (Syntactically Awesome Stylesheets) - это препроцессор стилей, расширяющий возможности обычного `CSS`.
   - **Применение в проекте:** `SCSS` применяется для удобного и структурированного написания стилей, обеспечивая легкость поддержки и модификации.
4. **react-markdown:**
   - **Описание:** Библиотека `react-markdown` предоставляет возможность встраивать и отображать `Markdown-разметку` в `React-приложениях`.
   - **Применение в проекте:** `react-markdown` используется для визуализации контента в формате `Markdown`, что делает текстовую информацию более удобной и читаемой.

### Инструменты для контроля качества кода

1. **ESLint:**
   - **Описание:** `ESLint` - это инструмент для статического анализа кода `JavaScript` с целью выявления и исправления паттернов программирования.
   - **Применение в проекте:** `ESLint` используется для поддержания стандартов кодирования и выявления потенциальных проблем в `JavaScript-коде`.
2. **Prettier:**
   - **Описание:** `Prettier` - это инструмент форматирования кода, который автоматически приводит код к установленным стандартам.
   - **Применение в проекте:** `Prettier` используется для автоматического форматирования кода, что обеспечивает единообразие и читаемость.
3. **Stylelint:**
   - **Описание:** `Stylelint` - это линтер для стилей, который проверяет `CSS/SCSS` на соответствие правилам написания кода.
   - **Применение в проекте:** `Stylelint` используется для поддержания качества стилей и соблюдения стандартов написания.
4. **HTMLHint:**
   - **Описание:** `HTMLHint` - это инструмент для статического анализа `HTML-кода`, написанного на `JavaScript`.
   - **Применение в проекте:** `HTMLHint` используется для выявления и исправления потенциальных проблем в `HTML-разметке`.

### Инструменты для управления коммитами

1. **Husky:**
   - **Описание:** `Husky` - это инструмент для предотвращения плохих коммитов и предварительного выполнения скриптов перед коммитом.
   - **Применение в проекте:** `Husky` используется для автоматизации процесса контроля качества кода перед фиксацией изменений.
2. **Commitlint:**
   - **Описание:** `Commitlint` - это инструмент для проверки соответствия сообщений коммитов заданным конвенциям.
   - **Применение в проекте:** `Commitlint` используется для поддержания структурированности и соблюдения конвенций в сообщениях коммитов.

### Нормализация стилей

1. **Normalize.css:**
   - **Описание:** `Normalize.css` - это небольшая библиотека, которая призвана предоставить браузерам единые стили по умолчанию.
   - **Применение в проекте:** `Normalize.css` применяется для обеспечения однородного отображения элементов на различных браузерах.

Эти технологии и инструменты совместно обеспечивают высокий стандарт качества кода, эффективность разработки и удобство сопровождения веб-сайта по курсам "Компас 3D".

## Заключение

Проект является результатом командного труда и открыт для улучшений. Если у вас есть предложения, замечания или желание внести вклад, не стесняйтесь создавать `issues` и `pull requests` в репозитории.

Спасибо за интерес к проекту!

```ts
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
```

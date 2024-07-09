import { Middleware } from 'redux';

import { UPDATE_PROGRESS, UPDATE_THEME } from 'services/types/user';

import { RootState } from 'services/index';

import UserProgressManager from 'utils/UserProgressManager';
import ThemeManager from 'utils/ThemeManager';

export function userMiddleware(): Middleware<RootState> {
  return store => next => (action: any) => {
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

    return next(action);
  };
}

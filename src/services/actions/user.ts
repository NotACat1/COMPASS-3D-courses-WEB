import { UPDATE_PROGRESS, UPDATE_THEME } from 'services/types/user';

interface IUpdateModules {
  readonly type: typeof UPDATE_PROGRESS;
  readonly payload: {
    module: string;
    lesson: string;
  };
}

interface IUpdateTheme {
  readonly type: typeof UPDATE_THEME;
}

export type TUserActions = IUpdateModules | IUpdateTheme;

// Создание действий (action creators)
// Действие для обновления прогресса в модулях
export const updateModules = (
  module: string,
  lesson: string,
): IUpdateModules => ({
  type: UPDATE_PROGRESS,
  payload: { module, lesson },
});

// Действие для обновления темы (например, светлой/темной)
export const updateTheme = (): IUpdateTheme => ({ type: UPDATE_THEME });

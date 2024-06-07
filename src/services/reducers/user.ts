// Импорт Types
import { UPDATE_PROGRESS, UPDATE_THEME } from 'services/types/user';

// Импорт Actions
import { TUserActions } from 'services/actions/user';

// Импорт функций
import UserProgressManager from 'utils/UserProgressManager';
import ThemeManager from 'utils/ThemeManager';

type TUserState = {
  progress: { [key: string]: string[] };
  theme: string;
};

// Начальное состояние хранилища
const initialState: TUserState = {
  progress: UserProgressManager.loadProgress(),
  theme: ThemeManager.initTheme(),
};

// Редуктор для управления состоянием хранилища
const userReducer = (state = initialState, action: TUserActions) => {
  // Обработка различных действий
  switch (action.type) {
    case UPDATE_PROGRESS: {
      const { module, lesson } = action.payload;
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

export default userReducer;

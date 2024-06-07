// Импорт Types
import { UPDATE_MODULES } from 'services/types/modules';

// Импорт Actions
import { TModulesActions } from 'services/actions/modules';

// Импорт интерфейсов
import { IModule } from 'utils/interfaces/module';

type TModulesState = {
  modules: IModule[];
};

// Начальное состояние хранилища
const initialState: TModulesState = {
  modules: [],
};

// Редуктор для управления состоянием хранилища
const modulesReducer = (state = initialState, action: TModulesActions) => {
  // Обработка различных действий
  switch (action.type) {
    case UPDATE_MODULES: {
      return {
        ...state,
        modules: [...action.payload],
      };
    }
    // Если действие не определено, возвращаем текущее состояние
    default: {
      return state;
    }
  }
};

export default modulesReducer;

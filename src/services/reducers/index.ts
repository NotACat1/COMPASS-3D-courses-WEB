// Подключение Redux
import { combineReducers } from 'redux';

// Подключение отдельных редюсеров
import modulesReducer from './modules';
import userReducer from './user';

// Корневой редюсер, объединяющий все редюсеры
export const rootReducer = combineReducers({
  modulesData: modulesReducer,
  userData: userReducer,
});

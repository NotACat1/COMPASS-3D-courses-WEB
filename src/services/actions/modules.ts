import { UPDATE_MODULES } from 'services/types/modules';

// Импорт интерфейсов
import { IModule } from 'utils/interfaces/module';

interface IUpdateModules {
  readonly type: typeof UPDATE_MODULES;
  readonly payload: IModule[];
}

export type TModulesActions = IUpdateModules;

// Создание действий (action creators)
// Действие для обновления модулей в хранилище
export const updateModules = (modules: IModule[]): IUpdateModules => ({
  type: UPDATE_MODULES,
  payload: modules,
});

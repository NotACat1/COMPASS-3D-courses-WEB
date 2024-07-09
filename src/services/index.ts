// Подключение Redux
import { ThunkAction } from 'redux-thunk';

// Импортирование Actions
import { TModulesActions } from 'services/actions/modules';
import { TUserActions } from 'services/actions/user';

// Импортирование Actions
import { rootReducer } from 'services/reducers/';
import { store } from 'services/store';

// Типизация всех экшенов приложения
export type TApplicationActions = TModulesActions | TUserActions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;

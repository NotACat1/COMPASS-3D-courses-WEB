// rootReducer - корневой редюсер, объединяющий все редюсеры в приложении
import { rootReducer } from 'services/reducers/';

// Импорт middleware для WebSocket соединения
import { userMiddleware } from 'services/middleware/userMiddleware';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(userMiddleware()),
  devTools: process.env.NODE_ENV !== 'production',
});

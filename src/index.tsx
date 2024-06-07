// Импортируем React и другие библиотеки
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Импортируем Redux и другие библиотеки
import { Provider } from 'react-redux';
import { store } from './services/store';

// Импортируем компоненты
import App from 'components/app/app';

// Импортируем таблицу стилей
import 'normalize.css';
import './index.scss';

const rootElement = document.getElementById('root');

// Рендеринг основного компонента
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

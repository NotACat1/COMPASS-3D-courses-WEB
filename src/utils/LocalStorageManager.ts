const LocalStorageManager = {
  // Добавление данных в Local Storage
  setItem: (key: string, value: any): boolean => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true; // Успешно добавлено
    } catch (error) {
      console.error('Error настройки элемента в Local Storage:', error);
      return false; // Ошибка при добавлении
    }
  },

  // Получение данных из Local Storage
  getItem: (key: string): any => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error при получении элемента из Local Storage:', error);
      return null;
    }
  },

  // Удаление данных из Local Storage
  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true; // Успешно удалено
    } catch (error) {
      console.error('Error при удалении элемента из Local Storage:', error);
      return false; // Ошибка при удалении
    }
  },
};

export default LocalStorageManager;

import LocalStorageManager from 'utils/LocalStorageManager';
import { LOCAL_STORAGE } from 'utils/constants';

// Класс для управления прогрессом пользователя
class UserProgressManager {
  localStorageManager: typeof LocalStorageManager; // Менеджер локального хранилища
  storageKey: string; // Ключ хранения данных прогресса пользователя
  userProgress: { [moduleId: string]: string[] }; // Прогресс пользователя

  // Конструктор класса
  constructor(
    localStorageManager: typeof LocalStorageManager = LocalStorageManager,
    storageKey: string = LOCAL_STORAGE.userProgress,
  ) {
    // Используем переданные аргументы или значения по умолчанию
    this.localStorageManager = localStorageManager; // Менеджер локального хранилища
    this.storageKey = storageKey; // Ключ хранения данных прогресса пользователя
    this.userProgress = this.loadProgress(); // Загружаем прогресс пользователя из локального хранилища
  }

  // Метод для загрузки прогресса пользователя из локального хранилища
  loadProgress(): { [moduleId: string]: string[] } {
    const progressData = this.localStorageManager.getItem(this.storageKey);
    return progressData ? progressData : {}; // Возвращаем объект прогресса или пустой объект
  }

  // Метод для сохранения прогресса пользователя в локальное хранилище
  saveProgress(): void {
    this.localStorageManager.setItem(this.storageKey, this.userProgress);
  }

  // Метод для обновления прогресса пользователя при прохождении урока
  updateProgress(moduleId: string, lessonId: string): void {
    // Если нет записи для модуля, создаем массив
    if (!this.userProgress[moduleId]) {
      this.userProgress[moduleId] = [];
    }

    // Если урок еще не отмечен как пройденный, добавляем его и сохраняем прогресс
    if (!this.userProgress[moduleId].includes(lessonId)) {
      this.userProgress[moduleId].push(lessonId);
      this.saveProgress();
    }
  }

  // Метод для получения прогресса пользователя по конкретному модулю
  getProgressForModule(moduleId: string): string[] {
    return this.userProgress[moduleId] || []; // Возвращаем массив пройденных уроков для модуля
  }
}

// Экспортируем экземпляр класса UserProgressManager
export default new UserProgressManager();

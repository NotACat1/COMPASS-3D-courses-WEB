import { BASE_URL } from 'utils/constants';

// Класс для работы с API
class ApiService {
  private _baseUrl: string;

  constructor(url: string = BASE_URL) {
    this._baseUrl = url;
  }

  // Обработка ответа от сервера
  private _checkResponseStatus(response: Response): void {
    if (!response.ok) {
      throw new Response('', { status: response.status });
    }
  }

  // Получение данных по модулям
  async getModules(): Promise<any> {
    try {
      const response = await fetch(`${this._baseUrl}/index.json`);
      this._checkResponseStatus(response);
      const modulesData = await response.json();
      return modulesData;
    } catch (error: any) {
      // Обработка ошибки при получении данных по модулям
      throw new Response('', { status: error.status });
    }
  }

  // Получение данных по уроку в рамках модуля
  async getLesson(module: string, lesson: string): Promise<string> {
    try {
      const response = await fetch(`${this._baseUrl}/${module}/${lesson}`);
      this._checkResponseStatus(response);
      const lessonData = await response.text();
      return lessonData;
    } catch (error: any) {
      // Обработка ошибки при получении данных по уроку
      throw new Response('', { status: error.status });
    }
  }
}

// Создание экземпляра ApiService с базовым URL
export default new ApiService();

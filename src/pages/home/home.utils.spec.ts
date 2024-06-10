import { calculateProgress } from './home.utils';
import { IModule } from 'utils/interfaces/module';
import { ILesson } from 'utils/interfaces/lesson';

const testLessons: ILesson[] = [
  { id: '1', title: 'тестовое название 1' },
  { id: '2', title: 'тестовое название 2' },
  { id: '3', title: 'тестовое название 3' },
  { id: '4', title: 'тестовое название 4' },
];

const deffaultModule: IModule = {
  description: 'тестовое описание',
  duration: 0,
  icon: { caption: 'тестовое назание иконки', path: 'ссылка на иконку' },
  id: '0',
  lessons: [],
  title: 'тестовое название',
};

describe('calculateProgress', () => {
  it('should return 0 if there are no lessons or progress data', () => {
    const result = calculateProgress([], {});
    expect(result).toEqual(0);
  });

  it('should calculate progress correctly when there are modules and progress data', () => {
    const modules: IModule[] = [
      {
        ...deffaultModule,
        id: 'module1',
        lessons: [...testLessons.slice(0, 3)],
      },
      { ...deffaultModule, id: 'module2', lessons: [testLessons[3]] },
    ];
    const progress = {
      module1: [testLessons[0].id],
      module2: [testLessons[3].id],
    };
    const result = calculateProgress(modules, progress);
    expect(result).toEqual(50); // 2 out of 4 lessons completed = 50%
  });

  it('should handle modules with no progress data', () => {
    const modules: IModule[] = [
      {
        ...deffaultModule,
        id: 'module1',
        lessons: [...testLessons.slice(0, 3)],
      },
      { ...deffaultModule, id: 'module2', lessons: [testLessons[3]] },
    ];
    const progress = {
      module1: [testLessons[0].id],
    };
    const result = calculateProgress(modules, progress);
    expect(result).toEqual(25); // 1 out of 4 lessons completed = 25%
  });

  it('should return 100% progress when all lessons are completed', () => {
    const modules: IModule[] = [
      {
        ...deffaultModule,
        id: 'module1',
        lessons: [...testLessons.slice(0, 3)],
      },
      { ...deffaultModule, id: 'module2', lessons: [testLessons[3]] },
    ];
    const progress = {
      module1: [testLessons[0].id, testLessons[1].id, testLessons[2].id],
      module2: [testLessons[3].id],
    };
    const result = calculateProgress(modules, progress);
    expect(result).toEqual(100); // All 4 lessons completed = 100%
  });
});

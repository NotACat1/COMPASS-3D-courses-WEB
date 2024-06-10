import { getLessonWord } from './module.utils';

describe('getLessonWord', () => {
  it('should return "уроков" for numbers ending in 0, 5-9, or 11-19', () => {
    expect(getLessonWord(0)).toBe('уроков');
    expect(getLessonWord(5)).toBe('уроков');
    expect(getLessonWord(9)).toBe('уроков');
    expect(getLessonWord(10)).toBe('уроков');
    expect(getLessonWord(15)).toBe('уроков');
    expect(getLessonWord(19)).toBe('уроков');
    expect(getLessonWord(111)).toBe('уроков');
    expect(getLessonWord(115)).toBe('уроков');
    expect(getLessonWord(119)).toBe('уроков');
  });

  it('should return "урок" for numbers ending in 1 (except 11)', () => {
    expect(getLessonWord(1)).toBe('урок');
    expect(getLessonWord(21)).toBe('урок');
    expect(getLessonWord(31)).toBe('урок');
  });

  it('should return "урока" for numbers ending in 2-4 (except 12-14)', () => {
    expect(getLessonWord(2)).toBe('урока');
    expect(getLessonWord(3)).toBe('урока');
    expect(getLessonWord(4)).toBe('урока');
    expect(getLessonWord(22)).toBe('урока');
    expect(getLessonWord(33)).toBe('урока');
    expect(getLessonWord(44)).toBe('урока');
  });
});

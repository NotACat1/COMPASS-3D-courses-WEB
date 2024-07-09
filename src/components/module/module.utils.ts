const getLessonWord = (number: number) => {
  const lastTwoDigits = number % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'уроков';
  }

  const lastDigit = number % 10;

  if (lastDigit === 1) {
    return 'урок';
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'урока';
  }

  return 'уроков';
};

export { getLessonWord };

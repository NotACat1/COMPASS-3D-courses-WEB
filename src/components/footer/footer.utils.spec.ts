import { formatPhoneNumber } from './footer.utils';

describe('formatPhoneNumber', () => {
  test('should format phone number correctly', () => {
    const phoneNumber = '123-456-789-00';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toBe('1-234-567-89-00');
  });

  test('should remove non-numeric characters', () => {
    const phoneNumber = '(123) 456-7890';
    const formattedNumber = formatPhoneNumber(phoneNumber);
    expect(formattedNumber).toBe('1234567890');
  });

  test('should handle different input formats', () => {
    const phoneNumber1 = '123 456 789 00';
    const phoneNumber2 = '+1 (123) 456-7890';
    const formattedNumber1 = formatPhoneNumber(phoneNumber1);
    const formattedNumber2 = formatPhoneNumber(phoneNumber2);
    expect(formattedNumber1).toBe('1-234-567-89-00');
    expect(formattedNumber2).toBe('1-123-456-78-90');
  });

  test('should handle incomplete phone numbers', () => {
    const phoneNumber1 = '1234';
    const phoneNumber2 = '+';
    const formattedNumber1 = formatPhoneNumber(phoneNumber1);
    const formattedNumber2 = formatPhoneNumber(phoneNumber2);
    expect(formattedNumber1).toBe('1234');
    expect(formattedNumber2).toBe('');
  });
});

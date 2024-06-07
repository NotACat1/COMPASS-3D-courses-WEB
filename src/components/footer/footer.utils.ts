import { CONTACTS } from 'utils/constants';

const formatPhoneNumber = (phoneNumber: string) => {
  // Очищаем от всех символов, кроме цифр
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  // Форматируем остальные части номера
  return cleanNumber.replace(
    /^(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})/,
    '$1-$2-$3-$4-$5',
  );
};

export { CONTACTS as contacts, formatPhoneNumber };

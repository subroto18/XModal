export const validatePhone = (phone: string) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phone);
};

export const validateDate = (date: string): boolean => {
  if (!date) return false;

  const selectedDate = new Date(date);
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return selectedDate <= today;
};

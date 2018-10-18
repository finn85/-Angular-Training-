export const checkDateFormat = (value: string, separator: string): boolean => {

  const dateParts = value.split(separator);

  return (dateParts.length !== 3);
};

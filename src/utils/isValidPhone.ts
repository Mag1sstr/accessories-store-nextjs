export const isValidPhone = (tel: string) => {
  const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  return re.test(tel) && tel.length <= 11;
};

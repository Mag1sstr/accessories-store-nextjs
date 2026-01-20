export const formatDate = (value: Date) => {
  const date = new Date(value);
  const formatterFull = new Intl.DateTimeFormat("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `${formatterFull.format(date)}, в ${date.getHours()}:${date.getMinutes()}`;
};

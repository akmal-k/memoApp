export const getFormattedDate = () => {
  let now = new Date(),
    year = now.getFullYear(),
    month = '' + (now.getMonth() + 1),
    day = '' + now.getDate();
  return [year, replaceZero(month), replaceZero(day)].join('.');
};

export const replaceZero = (number: string) =>
  parseInt(number) < 10 ? `0${number}` : number;

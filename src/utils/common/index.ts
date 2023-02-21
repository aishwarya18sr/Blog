import { monthNames } from "../../constants/postCard";

export const getSuffixOfDay = (dayNumber: number) => {
  if (dayNumber > 3 && dayNumber < 21) return "th";
  switch (dayNumber % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const getFormattedDateFromUtcDate = (utcDate: string) => {
  const date = new Date(utcDate);
  return `${date.getDate()}${getSuffixOfDay(date.getDate())}
      ${monthNames[date.getMonth()]}, 
      ${date.getFullYear()}`;
};

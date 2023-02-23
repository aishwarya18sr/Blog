import { BlogData } from "./../../types/blogPosts";
import { monthNames } from "../../constants/postCard";
import { Dispatch, SetStateAction } from "react";

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

export const getBlogIndexById = (
  allBlogData: BlogData[],
  selectedBlogDataId: number
) => {
  return allBlogData.findIndex(
    (eachBlogData) => eachBlogData.id === selectedBlogDataId
  );
};

export const updateAllBlogData = (
  updatedBlogData: BlogData,
  allBlogData: BlogData[],
  setAllBlogData: Dispatch<SetStateAction<BlogData[]>>
) => {
  const blogDataIndex = getBlogIndexById(allBlogData, updatedBlogData.id);
  setAllBlogData([
    ...allBlogData.slice(0, blogDataIndex),
    updatedBlogData,
    ...allBlogData.slice(blogDataIndex + 1),
  ]);
};

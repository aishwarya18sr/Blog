import { BlogData } from "../types";

export const mockBlogPostData: BlogData[] = [
  {
    id: 1,
    date: "6/29/2021 4:52:48 PM UTC",
    readingTime: "2 mins",
    title: "mock title 1",
    description: "mock description 1",
    claps: 10,
    liked: false,
    image: "abstract.png",
  },
  {
    id: 2,
    date: "6/29/2022 4:52:48 PM UTC",
    readingTime: "4 mins",
    title: "mock title 2",
    description: "mock description 2",
    claps: 12,
    liked: true,
    image: "abstract.png",
  },
];

export const mockClapsData = {
  data: {
    claps: 10,
    liked: false,
  },
};

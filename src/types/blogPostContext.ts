import { Dispatch, SetStateAction } from "react";
import { BlogData } from "../types";

export interface BlogPostContextType {
  allBlogData: BlogData[];
  setAllBlogData: Dispatch<SetStateAction<BlogData[]>>;
}

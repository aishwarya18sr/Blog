import { Dispatch, SetStateAction } from "react";
import { BlogData } from "../types";

export interface BlogPostContextType {
  allBlogData: BlogData[] | null;
  setAllBlogData: Dispatch<SetStateAction<BlogData[] | null>>;
}

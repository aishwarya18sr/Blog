import React, { createContext, useState } from "react";
import { BlogData, BlogPostContextType } from "../types";

export const BlogPostContext = createContext({} as BlogPostContextType);

interface BlogProviderProps {
  children: JSX.Element;
}

export const BlogPostProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [allBlogData, setAllBlogData] = useState<BlogData[] | null>(null);
  return (
    <BlogPostContext.Provider value={{ allBlogData, setAllBlogData }}>
      {children}
    </BlogPostContext.Provider>
  );
};

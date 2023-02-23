import React, { createContext, useState } from "react";
import { BlogData, BlogPostContextType } from "../types";

export const BlogPostContext = createContext({} as BlogPostContextType);

interface BlogPostProviderProps {
  children: JSX.Element;
}

export const BlogPostProvider: React.FC<BlogPostProviderProps> = ({
  children,
}) => {
  const [allBlogData, setAllBlogData] = useState<BlogData[]>([]);

  return (
    <BlogPostContext.Provider
      value={{
        allBlogData,
        setAllBlogData,
      }}
    >
      {children}
    </BlogPostContext.Provider>
  );
};

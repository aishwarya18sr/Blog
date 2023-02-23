import React, { createContext, useContext, useState } from "react";
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

export const useBlogPost = () => {
  const context = useContext(BlogPostContext);
  if (context === undefined) {
    throw new Error("BlogPost should be used inside BlogPostProvider");
  }
  return context;
};

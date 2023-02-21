export const BACKEND_URL = "http://localhost:8080/";

export const GET_BLOG_DATA = {
  url: "blog-posts",
  method: "get",
};

export const UPDATE_BLOG_DATA = (blogId: number) => ({
  url: `blog-posts/${blogId}`,
  method: "put",
});

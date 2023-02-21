export const BACKEND_URLS = "http://localhost:9000/";

export const GET_BLOG_DATA = {
  url: "blogPosts/",
  method: "get",
};

export const UPDATE_BLOG_DATA = (blogId: number) => ({
  url: `blogPosts/${blogId}`,
  method: "put",
});

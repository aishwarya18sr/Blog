export const BACKEND_URLS = "http://localhost:9000/";

export const GET_BLOG_DATA = {
  url: "blog/",
  method: "get",
};

export const UPDATE_LIKE = (blogId: number) => ({
  url: `blog/like/${blogId}`,
  method: "put",
});

export const UPDATE_CLAP = (blogId: number) => ({
  url: `blog/clap/${blogId}`,
  method: "put",
});

import { mockBlogPostData } from "./../../../mocks/blogPosts";
import axios from "axios";
import makeRequest from "..";
import {
  BACKEND_URL,
  GET_BLOG_DATA,
  UPDATE_BLOG_DATA,
} from "../../../constants/apiEndPoints";

jest.mock("axios");

describe("makeRequest", () => {
  it("should make api call with appropriate request options and return response body when only api endpoint is specified", async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockResolvedValue({ data: mockBlogPostData });
    expect(mockedAxios).not.toBeCalled();
    const response = await makeRequest(GET_BLOG_DATA);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: "blog-posts",
      method: "get",
    });
    expect(response).toEqual(mockBlogPostData);
  });
  it("should make api call with appropriate request options and return response body when api endpoint and request body is specified", async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockResolvedValue({ data: { data: { claps: 1 } } });
    expect(mockedAxios).not.toBeCalled();
    const response = await makeRequest(UPDATE_BLOG_DATA(1), {
      data: { claps: 1 },
    });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: "blog-posts/1",
      method: "put",
      data: {
        claps: 1,
      },
    });
    expect(response).toEqual({
      data: {
        claps: 1,
      },
    });
  });
});

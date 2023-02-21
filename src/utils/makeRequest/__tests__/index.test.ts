import { mockClapsData } from "./../../../mocks/blogPosts";
import {
  BACKEND_URL,
  UPDATE_BLOG_DATA,
} from "./../../../constants/apiEndPoints";
import axios from "axios";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import makeRequest from "..";
import { GET_BLOG_DATA } from "../../../constants/apiEndPoints";

jest.mock("axios");

describe("makeRequest", () => {
  it("should call axios with appropriate url, baseURL and method for GET request", async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockResolvedValueOnce({
      data: mockBlogPostData,
    });
    await makeRequest(GET_BLOG_DATA);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: GET_BLOG_DATA.url,
      method: "get",
    });
  });
  it("should call axios with appropriate url, baseURL, method and dynamic config for PUT request", async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockResolvedValueOnce({
      data: mockClapsData,
    });
    await makeRequest(UPDATE_BLOG_DATA(1), { data: { claps: 1 } });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: UPDATE_BLOG_DATA(1).url,
      method: "put",
      data: { claps: 1 },
    });
  });
});

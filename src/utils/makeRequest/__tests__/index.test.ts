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
  const mockedAxios = axios as jest.MockedFunction<typeof axios>;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should make API call with appropriate request options and return response body when only endpoint is specified", async () => {
    mockedAxios.mockResolvedValueOnce({
      data: mockBlogPostData,
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(GET_BLOG_DATA);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: GET_BLOG_DATA.url,
      method: "get",
    });
    expect(response).toEqual(mockBlogPostData);
  });
  it("should make API call with appropriate request options and return response body when both endpoint and request body are specified", async () => {
    mockedAxios.mockResolvedValueOnce({
      data: { claps: 1 },
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(UPDATE_BLOG_DATA(1), {
      data: { claps: 1 },
    });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: UPDATE_BLOG_DATA(1).url,
      method: "put",
      data: { claps: 1 },
    });
    expect(response).toEqual({ claps: 1 });
  });
});

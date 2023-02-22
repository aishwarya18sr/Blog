import {
  BACKEND_URL,
  UPDATE_BLOG_DATA,
} from "./../../../constants/apiEndPoints";
import axios from "axios";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import makeRequest from "..";
import { GET_BLOG_DATA } from "../../../constants/apiEndPoints";
import { ERROR_ROUTE } from "../../../constants/routes";

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
  it("should navigate to error route when API call returns error without status code", async () => {
    const mockNavigate = jest.fn();
    mockedAxios.mockRejectedValueOnce({ message: "Error!" });
    await makeRequest(GET_BLOG_DATA, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(ERROR_ROUTE);
  });
  it("should navigate to error route with response status code when API call returns error with status code", async () => {
    const mockNavigate = jest.fn();
    mockedAxios.mockRejectedValueOnce({
      response: { data: { statusCode: 500 } },
    });
    await makeRequest(GET_BLOG_DATA, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`${ERROR_ROUTE}/500`);
  });
});

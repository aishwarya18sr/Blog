import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import BlogPosts from "..";
import { BlogPostContext } from "../../../context/BlogPostContext";
import { mockBlogPostData, mockBlogPostData2 } from "../../../mocks/blogPosts";
import makeRequest from "../../../utils/makeRequest";

jest.mock("../../../utils/makeRequest");

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

describe("BlogPosts", () => {
  it("should show loading text when data is still loading", async () => {
    const mockMakeRequest = makeRequest as jest.MockedFunction<
      typeof makeRequest
    >;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    const mockedSetAllBlogData = jest.fn();
    render(
      <BlogPostContext.Provider
        value={{ allBlogData: null, setAllBlogData: mockedSetAllBlogData }}
      >
        <BlogPosts />
      </BlogPostContext.Provider>
    );
    expect(screen.getByText("Loading...")).toBeTruthy();
  });
  it("should show the blog posts when data is loaded", async () => {
    const mockMakeRequest = makeRequest as jest.MockedFunction<
      typeof makeRequest
    >;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    const mockedSetAllBlogData = jest.fn();
    render(
      <BlogPostContext.Provider
        value={{
          allBlogData: mockBlogPostData,
          setAllBlogData: mockedSetAllBlogData,
        }}
      >
        <BlogPosts />
      </BlogPostContext.Provider>
    );
    await waitFor(() => {
      expect(screen.getAllByTestId("blog-post")).toHaveLength(2);
    });
  });
  it("should update the context state when the clap button is clicked", async () => {
    const mockMakeRequest = makeRequest as jest.MockedFunction<
      typeof makeRequest
    >;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    const mockedSetAllBlogData = jest.fn();
    render(
      <BlogPostContext.Provider
        value={{
          allBlogData: mockBlogPostData,
          setAllBlogData: mockedSetAllBlogData,
        }}
      >
        <BlogPosts />
      </BlogPostContext.Provider>
    );
    await waitFor(() => {
      expect(mockedSetAllBlogData).toHaveBeenCalledTimes(1);
    });
    expect(mockedSetAllBlogData).toHaveBeenCalledWith(mockBlogPostData);
    const clapIcon = screen.getAllByTestId("clap-icon")[0];
    fireEvent.click(clapIcon);
    await waitFor(() => {
      expect(mockedSetAllBlogData).toHaveBeenCalledTimes(2);
    });
    expect(mockedSetAllBlogData).toHaveBeenCalledWith(mockBlogPostData2);
  });
});

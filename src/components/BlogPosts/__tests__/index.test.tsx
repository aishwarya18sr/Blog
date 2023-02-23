import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import BlogPosts from "..";
import { BlogPostContext } from "../../../contexts/BlogPostContext";
import { mockBlogPostData } from "../../../mocks/blogPosts";
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
    render(
      <BlogPostContext.Provider
        value={{ allBlogData: null, setAllBlogData: jest.fn() }}
      >
        <BlogPosts />
      </BlogPostContext.Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeTruthy();
    });
  });
  it("should show the blog posts when data is loaded", async () => {
    const mockMakeRequest = makeRequest as jest.MockedFunction<
      typeof makeRequest
    >;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    const mockSetAllBlogData = jest.fn();
    render(
      <BlogPostContext.Provider
        value={{
          allBlogData: mockBlogPostData,
          setAllBlogData: mockSetAllBlogData,
        }}
      >
        <BlogPosts />
      </BlogPostContext.Provider>
    );
    expect(screen.getAllByTestId("blog-post")).toHaveLength(2);
    await waitFor(() => {
      expect(mockSetAllBlogData).toHaveBeenCalledTimes(1);
    });
    expect(mockSetAllBlogData).toHaveBeenCalledWith(mockBlogPostData);
  });
});

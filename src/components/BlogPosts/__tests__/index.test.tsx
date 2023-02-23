import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import BlogPosts from "..";
import { BlogPostProvider } from "../../../context/BlogPostContext";
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
    mockMakeRequest.mockResolvedValue(undefined);
    render(
      <BlogPostProvider>
        <BlogPosts />
      </BlogPostProvider>
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
    render(
      <BlogPostProvider>
        <BlogPosts />
      </BlogPostProvider>
    );
    await waitFor(() => {
      expect(screen.getAllByTestId("blog-post")).toHaveLength(2);
    });
  });
});

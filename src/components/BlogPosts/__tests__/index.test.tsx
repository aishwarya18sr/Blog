import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import BlogPosts from "..";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import makeRequest from "../../../utils/makeRequest";

jest.mock("../../../utils/makeRequest");

describe("BlogPosts", () => {
  it("should show loading text when data is still loading", async () => {
    const mockMakeRequest = makeRequest as jest.MockedFunction<
      typeof makeRequest
    >;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    render(<BlogPosts />);
    expect(screen.getByText("Loading...")).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText("mock title 1")).toBeTruthy();
    });
  });
  it("should show the blog posts when data is loaded", async () => {
    const mockMakeRequest = makeRequest as jest.MockedFunction<
      typeof makeRequest
    >;
    mockMakeRequest.mockResolvedValue(mockBlogPostData);
    render(<BlogPosts />);
    await waitFor(() => {
      expect(screen.getAllByTestId("blog-post")).toHaveLength(2);
    });
  });
  it("should show error message when there is error in data fetch", async () => {
    const mockMakeRequest = makeRequest as jest.MockedFunction<
      typeof makeRequest
    >;
    mockMakeRequest.mockRejectedValue({ message: "Error!!!!" });
    render(<BlogPosts />);
    await waitFor(() => {
      expect(screen.getByText("Error!!!!")).toBeTruthy();
    });
  });
});

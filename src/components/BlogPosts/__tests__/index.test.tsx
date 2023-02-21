import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import BlogPosts from "..";
import makeRequest from "../../../utils/makeRequest";

jest.mock("../../../utils/makeRequest/");

describe("BlogPosts", () => {
  const mockedMakeRequest = makeRequest as jest.MockedFunction<
    typeof makeRequest
  >;
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render correctly", async () => {
    mockedMakeRequest.mockResolvedValueOnce(mockBlogPostData);
    const { asFragment } = render(<BlogPosts />);
    await waitFor(() => {
      expect(screen.getByText("mock title 1")).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
  it("should show error message when GET /blog-data API returns error", async () => {
    mockedMakeRequest.mockRejectedValueOnce({ message: "Error!" });
    render(<BlogPosts />);
    await waitFor(() => {
      expect(screen.getByText("Error!")).toBeTruthy();
    });
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import BlogPosts from "..";

jest.mock("../../../utils/makeRequest/", () => () => {
  return Promise.resolve(mockBlogPostData);
});

describe("BlogPosts", () => {
  it("should render correctly", async () => {
    const { asFragment } = render(<BlogPosts />);
    await waitFor(() => {
      expect(screen.getByText("mock title 1")).toBeTruthy();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});

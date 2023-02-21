import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import React from "react";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import BlogPosts from "..";

jest.mock("../../../utils/makeReuqest/", () => () => {
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

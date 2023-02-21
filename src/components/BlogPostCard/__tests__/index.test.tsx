import { render } from "@testing-library/react";
import React from "react";
import { mockBlogPostData } from "../../../mocks/blogPosts";
import BlogPosts from "../../BlogPosts";

jest.mock("../../../utils/makeReuqest/", () => () => {
  return Promise.resolve(mockBlogPostData);
});

describe("BlogPosts", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<BlogPosts />);
    expect(asFragment()).toMatchSnapshot();
  });
});

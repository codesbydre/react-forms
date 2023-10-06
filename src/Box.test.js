import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

it("renders without crashing", () => {
  render(<Box />);
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <Box width="100" height="100" backgroundColor="red" />
  );
  expect(asFragment()).toMatchSnapshot();
});

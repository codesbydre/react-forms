import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a new box on form submission", function () {
  const { getByLabelText, getByText } = render(<BoxList />);
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const backgroundColorInput = getByLabelText("Background Color:");
  const submitButton = getByText("Add Box");

  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "150" } });
  fireEvent.change(backgroundColorInput, { target: { value: "red" } });
  fireEvent.click(submitButton);

  const newBox = document.querySelector(
    'div[style="width: 100px; height: 150px; background-color: red;"]'
  );
  expect(newBox).toBeInTheDocument();
});

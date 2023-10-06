import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", () => {
  render(<NewBoxForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("allows user to fill out form", () => {
  const { getByLabelText } = render(<NewBoxForm />);
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const backgroundColorInput = getByLabelText("Background Color:");

  fireEvent.change(widthInput, { target: { value: "100" } });
  expect(widthInput.value).toBe("100");
  fireEvent.change(heightInput, { target: { value: "150" } });
  expect(heightInput.value).toBe("150");
  fireEvent.change(backgroundColorInput, { target: { value: "red" } });
  expect(backgroundColorInput.value).toBe("red");
});

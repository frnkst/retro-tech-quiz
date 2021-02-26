import {render, screen} from "@testing-library/react";
import React from "react";
import {Categories} from "./Categories";

test('show the categories', () => {
  render(<Categories />)
  expect(screen.getByText("JavaScript")).toBeInTheDocument();
});

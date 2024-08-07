import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";
import { kebabCaseToTitleCase } from "./helpers";

test("button click flow", () => {
  // render App
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole("button", {name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {name: /disable button/i});


  //check initial color
  expect(buttonElement).toHaveClass("medium-violet-red");

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check the button color
  expect(buttonElement).toHaveClass("midnight-blue");
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("gray");
  fireEvent.click(checkboxElement);
  expect(buttonElement).toHaveClass("midnight-blue");


});

test("checkbox flow after button click", () => {
  render(<App />);

  //find element
  const buttonElement = screen.getByRole("button", {name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {name: /disable button/i});

  //check initial state
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
  
  // click in checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");

  //click checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass("medium-violet-red");

})

describe("kebabCaseToTitleCase", () => {
  test("works for hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });

  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });

});


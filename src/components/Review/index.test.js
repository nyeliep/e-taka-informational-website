import React from "react";
import { render, screen } from "@testing-library/react";
import Reviews from ".";

test("displays customer reviews", () => {
  render(<Reviews/>);


  const customTextMatcher = (content, element) => {
    return element.textContent.includes(content);
  };

  expect(screen.getByText("Rose", { exact: false, selector: "div" })).toBeInTheDocument();
  expect(screen.getByText("I recently purchased a Solar battery from E-Taka", { exact: false, selector: "div", matcher: customTextMatcher })).toBeInTheDocument();
  expect(screen.getByText("Sammy", { exact: false, selector: "div" })).toBeInTheDocument();
  expect(screen.getByText("The idea of a marketplace for recyclables is fantastic", { exact: false, selector: "div", matcher: customTextMatcher })).toBeInTheDocument();
  expect(screen.getByText("Imani", { exact: false, selector: "div" ,})).toBeInTheDocument();
  expect(screen.getByText("Dealing with e-waste used to be a headache for me until I discovered this website", { exact: false, selector: "div", matcher: customTextMatcher })).toBeInTheDocument();



});






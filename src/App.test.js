import { render, screen } from '@testing-library/react';
import React from "react";
import App from "./App";




test('renders footer component in App', () => {
  render(<App />);

  // expect(getByText("Core Values")).toBeInTheDocument();
  // expect(getByText("Vision")).toBeInTheDocument();


  const companyElement = screen.getByText(/COMPANY/i);
  expect(companyElement).toBeInTheDocument();


  // const reviewsElement = screen.getByText("Reviews");
  // expect(reviewsElement).toBeInTheDocument();


  // const teamElement = screen.getByText("Team");
  // expect(teamElement).toBeInTheDocument();
});





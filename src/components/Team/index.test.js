import React from "react";
import { render, screen } from "@testing-library/react";
import Team from ".";


describe("Team Component", () => {
  it("renders the component without errors", () => {
    render(<Team />);
  });

  it("displays the title 'Team'", () => {
    render(<Team />);
    const titleElement = screen.getByText("Team");
    expect(titleElement).toBeInTheDocument();
  });

  it("displays team members with their names and roles", () => {
    render(<Team />);


    const backendDevelopers = screen.getAllByText("Software Developer");

    // expect(backendDevelopers).toHaveLength(4);


    // expect(screen.getByText("Bridgit Amakove")).toBeInTheDocument();
    // expect(screen.getByText("Purity Ndirangu")).toBeInTheDocument();
    expect(screen.getByText("Linet Musembi")).toBeInTheDocument();
    expect(screen.getByText("Nyeliep Giel")).toBeInTheDocument();

    // expect(screen.getByText("Rachel Kenyani")).toBeInTheDocument();
    // expect(screen.getByText("UI/UX designer")).toBeInTheDocument();


  });

});
import { render } from '@testing-library/react';
import Navbar from '.';
import React from 'react';

describe("Navbar Component", () => {
  it("should render without errors", () => {
    render(<Navbar />);
  });
  it("should render home section", () => {
      const { getByText } = render(<Navbar />);
      const companySection = getByText("Home");
      expect(companySection).toBeInTheDocument();
    });
    it("should render about section", () => {
      const { getByText } = render(<Navbar />);
      const officesSection = getByText("About");
      expect(officesSection).toBeInTheDocument();
    });
    it("should render contact section", () => {
      const { getByText } = render(<Navbar />);
      const contactSection = getByText("Contact");
      expect(contactSection).toBeInTheDocument();
    });
    it("should render reviews section", () => {
      const { getByText } = render(<Navbar />);
      const copyrightText = getByText("Reviews");
      expect(copyrightText).toBeInTheDocument();
    });
    it("should render team section", () => {
      const { getByText } = render(<Navbar />);
      const copyrightText = getByText("Team");
      expect(copyrightText).toBeInTheDocument();
    });
});
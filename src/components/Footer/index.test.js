import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer Component", () => {
  it("should render contact section", () => {
    const { getByText } = render(<Footer />);
    const contactSection = getByText("CONTACT US");
    expect(contactSection).toBeInTheDocument();
  });

  it("should render social icons", () => {
    const { getByTestId } = render(<Footer />);
    const twitterIcon = getByTestId("twitter-icon");
    const facebookIcon = getByTestId("facebook-icon");
    const linkedinIcon = getByTestId("linkedin-icon");
    const instagramIcon = getByTestId("instagram-icon");

    expect(twitterIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });

  it("should render copyright text", () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = getByText(`© E-Taka ${currentYear}, All rights reserved`);
    expect(copyrightText).toBeInTheDocument();
  });
});

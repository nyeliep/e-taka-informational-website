import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '.';

describe('Landing Component', () => {
  it('renders the component with expected content', () => {
    render(<Landing />);


    const welcomeSpan = screen.getByText(/Welcome/i);
    const eWasteSpan = screen.getByText(/E-Waste/i);
    const platformText = screen.getByText(/Recycling Platform/i);
    const joinUsText = screen.getByText(
      /Join us in making a positive impact on the environment by recycling your electronic devices responsibly/i
    );


    const image = screen.getByAltText('Home');


    expect(welcomeSpan).toBeInTheDocument();
    expect(eWasteSpan).toBeInTheDocument();
    expect(platformText).toBeInTheDocument();
    expect(joinUsText).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});




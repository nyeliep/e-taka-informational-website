import React from 'react';
import { render } from '@testing-library/react';
import { Services } from '.';



describe('Services Component', () => {
  it('renders the component with correct content', () => {
    const { getByText, getByAltText } = render(<Services />);
    
    
    const titleElement = getByText('Services');
    expect(titleElement).toBeInTheDocument();

   
    const miniTitleElement = getByText('Give your old elctronics a new life');
    expect(miniTitleElement).toBeInTheDocument();

    
    const serviceTextElement = getByText('Sell them to us, and we will recycle them and sell the recycled products at a fraction of the cost of new ones.');
    expect(serviceTextElement).toBeInTheDocument();

    
    const phoneImage = getByAltText('E-Taka');
    expect(phoneImage).toBeInTheDocument();

    
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import { VectorElement } from '.';


describe('VectorElement Component', () => {
  it('renders the component with given props', () => {
    const props = {
      triangleColor: 'red',
      imageUrl: 'example.jpg',
      h1: 'Heading',
      text: 'Some text',
      fontSize: '16px',
    };



  });

  it('renders the component without an image when imageUrl is not provided', () => {
    const props = {
      triangleColor: 'red',
      h1: 'Heading',
      text: 'Some text',
    };

    const { container } = render(<VectorElement {...props} />);

    const image = container.querySelector('.imageStyle');
    expect(image).not.toBeInTheDocument();
  });
});


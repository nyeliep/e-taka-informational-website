import React from 'react';
import { render } from '@testing-library/react';
import CustomerReview from '.';

test('renders CustomerReview with provided data', () => {
  const imageUrl = 'image-url.jpg';
  const title = 'Great Product';
  const text = 'This product is amazing!';

  const { getByText, getByAltText } = render(
    <CustomerReview imageUrl={imageUrl} h1={title} text={text} />
  );

  const titleElement = getByText(title);
  const textElement = getByText(text);
  const imageElement = getByAltText('VCutout');

  expect(titleElement).toBeInTheDocument();
  expect(textElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', imageUrl);
});

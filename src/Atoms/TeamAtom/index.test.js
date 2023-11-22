import React from 'react';
import { render } from '@testing-library/react';
import TeamItem from '.';

test('renders TeamItem with provided data', () => {
  const imageUrl = 'image-url.jpg';
  const name = 'Nyeliep Giel';
  const role = 'Developer';

  const { getByText, getByAltText } = render(
    <TeamItem imageUrl={imageUrl} name={name} role={role} />
  );

  const nameElement = getByText(name);
  const roleElement = getByText(role);
  const imageElement = getByAltText('member');

  expect(nameElement).toBeInTheDocument();
  expect(roleElement).toBeInTheDocument();
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', imageUrl);
});
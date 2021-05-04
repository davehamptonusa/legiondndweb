import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialLinks from './SocialLinks';

describe('<SocialLinks />', () => {
  test('it should mount', () => {
    render(<SocialLinks />);
    
    const socialLinks = screen.getByTestId('SocialLinks');

    expect(socialLinks).toBeInTheDocument();
  });
});
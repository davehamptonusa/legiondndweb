import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Facts from './Facts';

describe('<Facts />', () => {
  test('it should mount', () => {
    render(<Facts />);
    
    const facts = screen.getByTestId('Facts');

    expect(facts).toBeInTheDocument();
  });
});
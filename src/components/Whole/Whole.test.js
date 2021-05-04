import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Whole from './Whole';

describe('<Whole />', () => {
  test('it should mount', () => {
    render(<Whole />);
    
    const whole = screen.getByTestId('Whole');

    expect(whole).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Scores from './Scores';

describe('<Scores />', () => {
  test('it should mount', () => {
    render(<Scores />);
    
    const scores = screen.getByTestId('Scores');

    expect(scores).toBeInTheDocument();
  });
});
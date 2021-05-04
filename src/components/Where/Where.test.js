import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Where from './Where';

describe('<Where />', () => {
  test('it should mount', () => {
    render(<Where />);
    
    const where = screen.getByTestId('Where');

    expect(where).toBeInTheDocument();
  });
});
import { render, screen } from '@testing-library/react';
import Reading from './Reading'

test('renders Reading', () => {
    render(<Reading />);
    const ReadingElement = screen.getByTestId('Reading-element')
    expect(ReadingElement).toBeInTheDocument();
  }); 
import { render, screen } from '@testing-library/react';
import Heading from './Heading'

test('renders Heading', () => {
    render(<Heading content="Recommendations"/>);
    const HeadingElement = screen.getByTestId('Heading-element')
    expect(HeadingElement).toBeInTheDocument();
  });
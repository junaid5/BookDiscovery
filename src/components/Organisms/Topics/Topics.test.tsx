import { render, screen } from '@testing-library/react';
import Topics from './Topics'

test('renders Topics', () => { 
    render(<Topics/>);
    const TopicsElement = screen.getByTestId('Topics-element')
    expect(TopicsElement).toBeInTheDocument();
  }); 
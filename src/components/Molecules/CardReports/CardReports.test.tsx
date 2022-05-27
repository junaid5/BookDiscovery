import { render, screen } from '@testing-library/react';
import CardReports from './CardReports'

test('renders CardReports', () => {
    render(<CardReports />);
    const CardReportsElement = screen.getByTestId('CardReports-element')
    expect(CardReportsElement).toBeInTheDocument();
  });
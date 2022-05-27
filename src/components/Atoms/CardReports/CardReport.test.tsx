import { render, screen } from '@testing-library/react';
import CardReport from './CardReport'

test('renders CardReport', () => {
    render(<CardReport />);
    const CardReportElement = screen.getByTestId('CardReport-element')
    expect(CardReportElement).toBeInTheDocument();
  });
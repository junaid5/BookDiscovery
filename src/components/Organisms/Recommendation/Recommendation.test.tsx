import { render, screen } from '@testing-library/react';
import Recommendation from './Recommendation'

test('renders Recommendation', () => {
    render(<Recommendation value="follow" />);
    const RecommendationElement = screen.getByTestId('Recommendation-element')
    expect(RecommendationElement).toBeInTheDocument();
  }); 
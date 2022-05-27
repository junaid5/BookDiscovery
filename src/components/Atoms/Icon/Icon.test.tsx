import { render, screen } from '@testing-library/react';
import Icon from './Icon'
import bell from './Bell.png'

test('renders Icon', () => {
    render(<Icon height="18.07px" width='15.17px' img={bell} margin="0px"/>);
    const IconElement = screen.getByTestId('Icon-element')
    expect(IconElement).toBeInTheDocument();
  });
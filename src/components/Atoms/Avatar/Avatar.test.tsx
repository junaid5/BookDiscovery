import { render, screen } from '@testing-library/react';
import Avatar from './Avatar'

test('renders Avatar', () => {
    render(<Avatar />);
    const avatarElement = screen.getByTestId('avatar-element')
    expect(avatarElement).toBeInTheDocument();
  });
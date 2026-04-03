import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals'; 
import Footer from '@/component/layouts/footer';

describe('Footer Component', () => {
  it('renders footer correctly', () => {
    const page = render(<Footer />);
    expect(screen.getByTestId('footer').textContent).toBe('Footer');
    expect(page).toMatchSnapshot();
  });
});
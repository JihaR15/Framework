import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals'; 
import Footer from '@/component/layouts/footer';

describe('Footer Component', () => {
  it('renders footer correctly', () => {
    const page = render(<Footer />);
    expect(screen.getByTestId('footer').textContent).toContain('Jiha Ramdhan');
    expect(screen.getByTestId('footer').textContent).toContain('2341720043');
    expect(page).toMatchSnapshot();
  });
});
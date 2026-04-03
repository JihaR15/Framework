import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import AboutPage from '@/pages/about';

describe('AboutPage', () => {
  it('renders about page correctly', () => {
    const page = render(<AboutPage />);
    expect(screen.getByTestId('title').textContent).toBe('About');
    expect(page).toMatchSnapshot();
  });
});
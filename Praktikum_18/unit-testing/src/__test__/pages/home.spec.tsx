import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Home from '@/pages/index';

describe('Home Page', () => {
  it('renders home page correctly', () => {
    const page = render(<Home />);
    expect(page).toMatchSnapshot();
  });
});
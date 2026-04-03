import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Register from '@/pages/auth/register';

// @ts-ignore
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: () => {},
    };
  },
}));

describe('Register Page', () => {
  it('renders register page correctly', () => {
    const page = render(<Register />);
    expect(page).toMatchSnapshot();
  });
});
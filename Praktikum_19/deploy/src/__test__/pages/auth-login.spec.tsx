import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Login from '@/pages/auth/login';

// @ts-ignore
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: () => {},
      query: { callbackUrl: '/' },
    };
  },
}));

describe('Login Page', () => {
  it('renders login page correctly', () => {
    const page = render(<Login />);
    expect(page).toMatchSnapshot();
  });
});
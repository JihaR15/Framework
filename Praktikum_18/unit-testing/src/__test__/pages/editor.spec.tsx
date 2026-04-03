import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Editor from '@/pages/editor/index';

// @ts-ignore
jest.mock('next-auth/react', () => ({
  useSession: () => ({ 
    data: { user: { fullname: "Testing User", email: "test@test.com", role: "editor" } }, 
    status: 'authenticated' 
  }),
}));

describe('Editor Page', () => {
  it('renders editor page correctly', () => {
    const page = render(<Editor />);
    expect(page).toMatchSnapshot();
  });
});
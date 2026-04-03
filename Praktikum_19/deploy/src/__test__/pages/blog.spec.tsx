import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Blog from '@/pages/blog/[slug]';

// @ts-ignore
jest.mock('next/router', () => ({
  useRouter() {
    return { query: { slug: 'test-post' } };
  },
}));

describe('Blog Page', () => {
  it('renders blog page correctly', () => {
    const page = render(<Blog />);
    expect(page).toMatchSnapshot();
  });
});
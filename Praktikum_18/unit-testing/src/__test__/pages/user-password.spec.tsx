import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Password from '@/pages/user/password/index';

describe('Password Page', () => {
  it('renders password page correctly', () => {
    const page = render(<Password />);
    expect(page).toMatchSnapshot();
  });
});
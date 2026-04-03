import { render } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import EditProfile from '@/pages/profile/edit'; 

describe('Edit Profile Page', () => {
  it('renders edit profile page correctly', () => {
    const page = render(<EditProfile />);
    expect(page).toMatchSnapshot();
  });
});
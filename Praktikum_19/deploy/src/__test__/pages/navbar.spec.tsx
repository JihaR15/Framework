import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals'; 
import Navbar from '@/component/layouts/navbar';

var mockSessionData: any = { data: null, status: 'unauthenticated' };
var mockSignInCalled = false;
var mockSignOutCalled = false;

// @ts-ignore
jest.mock('next-auth/react', () => ({
  useSession: () => mockSessionData,
  signIn: () => { mockSignInCalled = true; },
  signOut: () => { mockSignOutCalled = true; },
}));

// @ts-ignore
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('Navbar Component', () => {
  it('renders correctly when UNauthenticated and clicks Sign In', () => {
    mockSessionData = { data: null, status: 'unauthenticated' };
    mockSignInCalled = false;
    
    render(<Navbar />);
    
    const signInButton = screen.getByText(/Sign In/i);
    fireEvent.click(signInButton);
    
    expect(mockSignInCalled).toBe(true);
  });

  it('renders correctly when AUTHENTICATED and clicks Sign Out', () => {
    mockSessionData = { 
      data: { user: { name: "Jiha Ramdhan", fullname: "Jiha Ramdhan", image: "/avatar.png" } }, 
      status: 'authenticated' 
    };
    mockSignOutCalled = false;
    
    render(<Navbar />);
    
    const signOutButton = screen.getByText(/Sign Out/i);
    fireEvent.click(signOutButton);
    
    expect(mockSignOutCalled).toBe(true);
  });
});
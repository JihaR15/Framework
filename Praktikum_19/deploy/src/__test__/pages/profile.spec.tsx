import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HalamanProfile from "@/pages/profile";

// @ts-ignore
jest.mock("next-auth/react", () => ({
  useSession() {
    return {
      data: {
        user: {
          fullName: "Test User",
        },
      },
      status: "authenticated",
    };
  },
}));

// @ts-ignore
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/profile",
      pathname: "",
      query: {},
      asPath: "",
      push: () => {},
      events: {
        on: () => {},
        off: () => {},
      },
      isReady: true,
    };
  },
}));

describe("Profile Page", () => {
  it("renders profile page correctly", () => {
    const page = render(<HalamanProfile />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Halaman Profile"
    );
    expect(screen.getByText(/Test User/)).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});

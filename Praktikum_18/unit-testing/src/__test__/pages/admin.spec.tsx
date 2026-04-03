import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HalamanAdmin from "@/pages/admin";

// @ts-ignore
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/admin",
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

describe("Admin Page", () => {
  it("renders admin page correctly", () => {
    const page = render(<HalamanAdmin />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
      "Halaman Admin"
    );
    expect(page).toMatchSnapshot();
  });
});

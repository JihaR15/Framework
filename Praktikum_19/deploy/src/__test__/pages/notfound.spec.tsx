import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import UserSettingPage from "@/pages/user";

// @ts-ignore
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/user",
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

describe("User Page", () => {
  it("renders user page correctly", () => {
    const page = render(<UserSettingPage />);
    expect(screen.getByText("User Settting Page")).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import AppSetting from "@/pages/setting/app";

// @ts-ignore
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/setting/app",
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

describe("App Setting Page", () => {
  it("renders app setting page correctly", () => {
    const page = render(<AppSetting />);
    expect(screen.getByText("App Settting Page")).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});

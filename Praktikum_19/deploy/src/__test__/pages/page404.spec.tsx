import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import Custom404 from "@/pages/404";

// Mock Next.js Image component
// @ts-ignore
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock Next.js Link component
// @ts-ignore
jest.mock("next/dist/client/link", () => {
  return ({ children, href }: any) => {
    return <a href={href}>{children}</a>;
  };
});

// @ts-ignore
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/404",
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

describe("404 Page", () => {
  it("renders 404 page correctly", () => {
    const page = render(<Custom404 />);
    expect(screen.getByText(/Halaman Tidak Ditemukan/i)).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});

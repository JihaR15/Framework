import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import TampilanProduk from "@/pages/produk";

// @ts-ignore
jest.mock('next/router', () => ({
  useRouter() {
    return {
        route: "/produk",
        pathname: "",
        query: {},
        asPath: "",
        push: () => {}, 
        events: {
            on: () => {},
            off: () => {}
        },
        isReady: true,
    }
  },
}));

describe("Produk Page", () => {
  it("renders produk page correctly", () => {
    const page = render(<TampilanProduk />);
    // expect(screen.getByTestId("title").textContent).toBe("Produk Page");
    expect(page).toMatchSnapshot();
  });
});

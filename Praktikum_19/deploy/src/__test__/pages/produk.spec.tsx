import { render, screen } from "@testing-library/react";
import { describe, expect, it, jest, afterEach } from "@jest/globals";
import ProdukPage from "@/pages/produk";
import * as swr from "swr";
import * as nextRouter from "next/router";

afterEach(() => {
  jest.restoreAllMocks();
});

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("Produk Page", () => {
  it("renders loading state", () => {
    // mock SWR
    jest.spyOn(swr, "default").mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    } as any);

    // mock Router
    jest.spyOn(nextRouter, "useRouter").mockReturnValue({
      push: jest.fn(),
    } as any);

    render(<ProdukPage />);
    expect(screen.queryByText("Produk A")).toBeNull();
  });

  it("renders with data", () => {
    jest.spyOn(swr, "default").mockReturnValue({
      data: { data: [{ id: 1, nama: "Produk A", harga: 10000, image: "/test.jpg" }] },
      error: null,
      isLoading: false,
    } as any);

    jest.spyOn(nextRouter, "useRouter").mockReturnValue({
      push: jest.fn(),
    } as any);

    render(<ProdukPage />);
    expect(screen.getByText("Produk A")).toBeTruthy();
  });
});
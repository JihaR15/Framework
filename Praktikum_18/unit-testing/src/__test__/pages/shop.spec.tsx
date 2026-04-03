import { render, screen } from "@testing-library/react";
import { describe, expect, it, jest } from "@jest/globals";
import HalamanToko from "@/pages/shop/[[...slug]]";
import * as nextRouter from 'next/router';

jest.mock("next/router", () => {
  const actualNextRouter = jest.requireActual<typeof import("next/router")>("next/router");
  return {
    __esModule: true,
    ...actualNextRouter,
  };
});

describe("Shop Page", () => {
  it("renders correctly with slug parameters", () => {
    jest.spyOn(nextRouter, 'useRouter').mockReturnValue({ query: { slug: ["sepatu", "nike"] } } as any);
    const page = render(<HalamanToko />);
    expect(screen.getByText(/sepatu/)).toBeTruthy();
    expect(page).toMatchSnapshot();
  });

  it("renders correctly without slug parameters", () => {
    jest.spyOn(nextRouter, 'useRouter').mockReturnValue({ query: {} } as any);
    const page = render(<HalamanToko />);
    expect(screen.getByText(/Semua Kategori/)).toBeTruthy();
    expect(page).toMatchSnapshot();
  });
});
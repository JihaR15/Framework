import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from '@jest/globals';
import HalamanProduk, { getStaticProps, getStaticPaths } from '@/pages/produk/[produk]';

jest.mock('next/router', () => ({
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    pathname: '/produk/[produk]',
    route: '/produk/[produk]',
    asPath: '/produk/1',
    query: { produk: '1' },
  }),
}));

global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;

describe('Halaman Detail Produk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders komponen HalamanProduk correctly', () => {
    const mockProduct = {
      id: "1",
      nama: "Sepatu Baru",
      harga: 100000,
      kategori: "Shoes",
      image: "/dummy-image.png",
    };

    const page = render(<HalamanProduk products={mockProduct} />);

    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Sepatu Baru');
    
    expect(page).toMatchSnapshot();
  });

  it('getStaticPaths returns correct paths', async () => {
    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        data: [{ id: '1' }, { id: '2' }],
      }),
    } as unknown as Response);

    const result = await getStaticPaths();

    expect(result.paths.length).toBe(2);
    expect(result.fallback).toBe(false);
  });

  it('getStaticProps returns correct props', async () => {
    (global.fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({
        data: { id: '1', nama: 'Sepatu Baru' },
      }),
    } as unknown as Response);

    const result = await getStaticProps({ params: { produk: '1' } } as any);

    expect(result).toEqual({
      props: { products: { id: '1', nama: 'Sepatu Baru' } },
    });
  });
});
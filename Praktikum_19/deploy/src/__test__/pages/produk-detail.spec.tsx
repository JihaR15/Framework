import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, jest } from '@jest/globals';
import HalamanProduk, { getStaticProps, getStaticPaths } from '@/pages/produk/[produk]';

global.fetch = jest.fn() as jest.MockedFunction<typeof fetch>;

describe('Halaman Detail Produk', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders komponen HalamanProduk correctly', () => {
        const mockProduct = {
            id: 1,
            name: 'Sepatu Baru',
            price: 100,
            category: 'Shoes',
            image: '/dummy-image.png',
        };

        const page = render(<HalamanProduk products={mockProduct as any} />);

        expect(screen.getAllByRole('heading', { level: 1 })[0].textContent).toContain('Detail Produk');
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
                data: { id: '1', name: 'Sepatu' },
            }),
        } as unknown as Response);

        const result = await getStaticProps({ params: { produk: '1' } });

        expect(result).toEqual({
            props: { products: { id: '1', name: 'Sepatu' } },
        });
    });
});

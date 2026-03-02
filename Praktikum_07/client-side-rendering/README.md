## Praktikum 07 - Client-Side Rendering

### Langkah 1: Setup Data Produk
1. Siapkan project Next.js
2. Buat endpoint API `/api/produk`
3. Pastikan data memiliki struktur:
    - `id`
    - `nama`
    - `kategori`
    - `harga`
    - `image`
4. Jalankan: `http://localhost:3000/api/products`<br>
![alt text](image.png)<br>

### Langkah 2: Implementasi CSR dengan useEffect
1. Buat file `index.tsx` di folder `views/produk`<br>
![alt text](image-1.png)<br>
2. Modifikasi `index.tsx`<br>
![alt text](image-2.png)<br>
3. Buka file `index.tsx` di `pages/produk/`<br>
![alt text](image-5.png)<br>
4. Modifikasi `index.tsx`<br>
![alt text](image-3.png)<br>
5. Jalankan: `http://localhost:3000/produk`<br>
![alt text](image-4.png)<br>
6. Buat file `produk.module.scss` di folder `produk`<br>
![alt text](image-6.png)<br>
7. Modifikasi `produk.module.scss`<br>
![alt text](image-7.png)<br>
![alt text](image-8.png)<br>
8. Modifikasi `index.tsx` di `pages/views/produk`<br>
![alt text](image-9.png)<br>
9. Jalankan browser<br>
![alt text](image-10.png)<br>

### Langkah 3: Implementasi Skeleton Loading
- Modifikasi `views/produk/index.tsx`
- Modifikasi `product.module.scss`
- Jalankan browser untuk melihat skeleton dengan animasi blinking
- Skeleton akan ditampilkan terlebih dahulu, kemudian gambar dan data produk

### Langkah 5: Implementasi SWR
[SWR Documentation](https://swr.vercel.app/)

1. Install SWR: `npm install swr`
2. Buat folder `utils/swr` dan file `fetcher.ts`
3. Modifikasi `fetcher.ts`
4. Update `pages/produk/index.tsx`

### Perbandingan
- useEffect manual vs SWR

### Tugas Praktikum
1. Jelaskan perbedaan:
    - Client Side Rendering (CSR)
    - Server Side Rendering (SSR)
    - Static Site Generation (SSG)
2. Buat halaman produk dengan skeleton loading dan animasi
3. Refactor dari useEffect menjadi SWR

### Troubleshooting
Jika error saat mengakses `http://localhost:3000/produk/server`, modifikasi file `index.tsx` di folder `views/product/`

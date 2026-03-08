## Praktikum 10 - Dynamic Routing

### Langkah 1 – Membuat Dynamic Route
1. Buka file `pages/products/[product].tsx` dan modifikasi sesuai (line 20)<br>
![alt text](image.png)<br>
2. Jalankan browser di `http://localhost:3000/produk`
3. Klik salah satu gambar untuk menuju halaman detail
![alt text](dynamic.gif)<br>

### Langkah 2 – Implementasi CSR (Client-Side Rendering)
1. Modifikasi file `[produk].tsx` di folder `src/pages/produk/`
![alt text](image-1.png)<br>
2. Rename file `produk.ts` (folder `pages/api/`) menjadi `[[...produk]].ts`<br>
![alt text](image-2.png) <br>
3. Update file `servicefirebase.ts`
![alt text](image-3.png)
4. Update file `[[...produk]].ts`<br>
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)
5. Buat file `index.tsx` di folder `views/DetailProduk` dan `detailProduk.module.scss`
![alt text](image-7.png)
- `detailProduk.module.scss`
![alt text](image-9.png)
![alt text](image-13.png)
![alt text](image-11.png)
- `index.tsx`
![alt text](image-14.png)
6. Modifikasi `[produk].tsx` di `src/pages/produk/`
![alt text](image-8.png)
7. Test: `http://localhost:3000/produk/` → klik produk → `http://localhost:3000/produk/"id produk"`
![alt text](detailproduk.gif)

### Langkah 3 – Implementasi SSR (Server-Side Rendering)
1. Comment line 9-20 di `[produk].tsx` dan tambahkan kode SSR
2. Test: `http://localhost:3000/produk/server`
3. Catatan: Tidak ada loading state karena data sudah tersedia sebelum render

### Langkah 4 – Implementasi SSG (Static Site Generation)
1. Modifikasi `[produk].tsx` dengan `getStaticPaths` dan `getStaticProps`
2. Update `index.tsx` di `src/views/DetailProduct`
3. Test: `http://localhost:3000/produk`

### Pengujian

| Metode | Tindakan | Hasil |
|--------|----------|-------|
| **CSR** | Refresh halaman → Periksa Network XHR | Ada loading; API request terlihat |
| **SSR** | Refresh halaman | Tidak ada loading; fetch tidak terlihat |
| **SSG** | Build → Start → Tambah produk → Refresh | Produk baru tidak muncul sampai build ulang |

### Tugas Praktikum

**Tugas Individu:**
1. Implementasikan halaman detail dengan CSR, SSR, dan SSG
2. Buat tabel perbandingan CSR vs SSR vs SSG (Loading, Build Required, SEO, Perubahan Data)
3. Dokumentasikan: Screenshot, Network tab, Build result

### Pertanyaan Analisis
1. Mengapa `getStaticPaths` wajib pada dynamic SSG?
2. Mengapa CSR membutuhkan loading state?
3. Mengapa SSG tidak menampilkan produk baru tanpa build ulang?
4. Mana metode terbaik untuk halaman detail e-commerce?
5. Apa risiko menggunakan SSG untuk produk yang sering berubah?


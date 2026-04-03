## Praktikum 18 - Unit Testing

### Langkah 1 – Setup Jest di Next.js

**Install Dependencies**

Jalankan:
```bash
npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force
```

<br>

![alt text](image.png)<br>

**Buat File Konfigurasi**

Dokumentasi: https://nextjs.org/docs/pages/guides/testing/jest

Buat file: `jest.config.mjs`<br>
![alt text](image-1.png)<br>

**Tambahkan Script di package.json**<br>
![alt text](image-2.png)<br>

---

### Langkah 2 – Struktur Folder Testing

Buat folder: `src/__test__/`<br>
![alt text](image-3.png)<br>

---

### Langkah 3 – Testing Halaman About

**Buat File Testing**

File: `src/__test__/pages/about.spec.tsx`

![alt text](image-4.png)

Contoh Testing Snapshot. Pada `about.spec.tsx` tambahkan code berikut:<br>

![alt text](image-5.png)<br>

**Jalankan Testing**

```bash
npm run test
```

Jika berhasil: `PASS about.spec.tsx`<br>

![alt text](image-6.png)<br>

---

### Langkah 4 – Coverage Report

Jalankan:
```bash
npm run test:coverage
```

Akan muncul folder: `coverage/`<br>

![alt text](image-7.png)<br>

Buka: `coverage/lcov-report/index.html` (buka melalui explorer)<br>
![alt text](image-8.png)<br>

**Target perusahaan biasanya:** Minimum 80% coverage

---

### Langkah 5 – Konfigurasi Coverage Lengkap

Update `jest.config.mjs`<br>

![alt text](image-12.png)<br>

Jalankan `npm run test:coverage`<br>

![alt text](image-9.png)<br>
![alt text](image-10.png)<br>

![alt text](image-11.png)<br>

---

### Langkah 6 – Testing dengan getByTestId

1. Tambahkan pada About Page:
```jsx
<h1 data-testid="title">About Page</h1>
```
<br>

![alt text](image-14.png)<br>

2. Update Testing pada `about.spec.tsx`<br>
![alt text](image-13.png)<br>
![alt text](image-15.png)<br>

3. Coba jika dibuat salah (ubah menjadi `toBe("About")`):<br>
![alt text](image-16.png)<br>
```
FAIL
Expected: "About"
Received: "About Page"
```
![alt text](image-17.png)<br>
![alt text](image-18.png)<br>
---

### Langkah 7 – Testing Page dengan Router (Mocking)

Melakukan testing pada halaman produk.

1. Buat file `product.spec.tsx`<br>
![alt text](image-20.png)<br>

2. Ketika testing halaman Product, sering muncul error: `NextRouter was not mounted`<br>
![alt text](image-19.png)<br>

**Solusi:** Mock Next Router dengan menambahkan kode di file `product.spec.tsx`<br>
![alt text](image-28.png)
---

### Langkah 8 – Menangani Undefined Data

Jalankan `npm run test:coverage`
![alt text](image-26.png)
![alt text](image-23.png)

Jika muncul error `Cannot read properties of undefined`, perbaiki di komponen pada file `index.tsx` pada folder `pages/produk`
![alt text](image-24.png)
![alt text](image-25.png)
**Note:** Pastikan comment pada code yang ditunjukkan di 2 code testing
![alt text](image-27.png)

**Analisis Coverage**
![alt text](image-22.png)

Perhatikan bagian:
- Statement
- Branch
- Function
- Lines

**Contoh:**
| Metric | Hasil |
|--------|-------|
| Statements | 85% |
| Branch | 60% |
| Functions | 90% |
| Lines | 88% |

Branch biasanya paling sulit karena perlu menguji kondisi if/else.

---

### Standar Industri

- ≥ 80% → boleh production
- < 80% → harus diperbaiki
- Semua critical feature wajib dites

---

### Tugas Praktikum

1. Buat unit test untuk:
   - Halaman Product
   - 1 Komponen

2. Gunakan minimal:
   - 1 Snapshot test
   - 1 toBe()
   - 1 getByTestId()

3. Buat coverage minimal 50%

4. Lakukan mocking untuk router

5. Dokumentasikan hasil coverage

---

### Diskusi & Refleksi

1. Mengapa unit testing penting sebelum production?
2. Mengapa branch coverage sulit mencapai 100%?
3. Apa itu mocking?
4. Kapan snapshot test digunakan?
5. Apakah semua file harus dites?

---

### Kesimpulan

Dalam praktikum ini mahasiswa telah:

- Menginstal dan mengkonfigurasi Jest
- Menggunakan React Testing Library
- Membuat unit test pada pages
- Menghasilkan coverage report
- Melakukan mocking router
- Memahami pentingnya testing di industri
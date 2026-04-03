## Praktikum 18 - Unit Testing

### Langkah 1 – Setup Jest di Next.js

**Install Dependencies**

Jalankan:
```bash
npm install jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom --save-dev --force
```

<br>

![alt text](../Praktikum_18/unit-testing/img/image.png)<br>

**Buat File Konfigurasi**

Dokumentasi: https://nextjs.org/docs/pages/guides/testing/jest

Buat file: `jest.config.mjs`<br>
![alt text](../Praktikum_18/unit-testing/img/image-1.png)<br>

**Tambahkan Script di package.json**<br>
![alt text](../Praktikum_18/unit-testing/img/image-2.png)<br>

---

### Langkah 2 – Struktur Folder Testing

Buat folder: `src/__test__/`<br>
![alt text](../Praktikum_18/unit-testing/img/image-3.png)<br>

---

### Langkah 3 – Testing Halaman About

**Buat File Testing**

File: `src/__test__/pages/about.spec.tsx`

![alt text](../Praktikum_18/unit-testing/img/image-4.png)

Contoh Testing Snapshot. Pada `about.spec.tsx` tambahkan code berikut:<br>

![alt text](../Praktikum_18/unit-testing/img/image-5.png)<br>

**Jalankan Testing**

```bash
npm run test
```

Jika berhasil: `PASS about.spec.tsx`<br>

![alt text](../Praktikum_18/unit-testing/img/image-6.png)<br>

---

### Langkah 4 – Coverage Report

Jalankan:
```bash
npm run test:coverage
```

Akan muncul folder: `coverage/`<br>

![alt text](../Praktikum_18/unit-testing/img/image-7.png)<br>

Buka: `coverage/lcov-report/index.html` (buka melalui explorer)<br>
![alt text](../Praktikum_18/unit-testing/img/image-8.png)<br>

**Target perusahaan biasanya:** Minimum 80% coverage

---

### Langkah 5 – Konfigurasi Coverage Lengkap

Update `jest.config.mjs`<br>

![alt text](../Praktikum_18/unit-testing/img/image-12.png)<br>

Jalankan `npm run test:coverage`<br>

![alt text](../Praktikum_18/unit-testing/img/image-9.png)<br>
![alt text](../Praktikum_18/unit-testing/img/image-10.png)<br>

![alt text](../Praktikum_18/unit-testing/img/image-11.png)<br>

---

### Langkah 6 – Testing dengan getByTestId

1. Tambahkan pada About Page:
```jsx
<h1 data-testid="title">About Page</h1>
```
<br>

![alt text](../Praktikum_18/unit-testing/img/image-14.png)<br>

2. Update Testing pada `about.spec.tsx`<br>
![alt text](../Praktikum_18/unit-testing/img/image-13.png)<br>
![alt text](../Praktikum_18/unit-testing/img/image-15.png)<br>

3. Coba jika dibuat salah (ubah menjadi `toBe("About")`):<br>
![alt text](../Praktikum_18/unit-testing/img/image-16.png)<br>
```
FAIL
Expected: "About"
Received: "About Me"
```
![alt text](../Praktikum_18/unit-testing/img/image-17.png)<br>
![alt text](../Praktikum_18/unit-testing/img/image-18.png)<br>
---

### Langkah 7 – Testing Page dengan Router (Mocking)

Melakukan testing pada halaman produk.

1. Buat file `product.spec.tsx`<br>
![alt text](../Praktikum_18/unit-testing/img/image-20.png)<br>

2. Ketika testing halaman Product, sering muncul error: `NextRouter was not mounted`<br>
![alt text](../Praktikum_18/unit-testing/img/image-19.png)<br>

**Solusi:** Mock Next Router dengan menambahkan kode di file `product.spec.tsx`<br>

![alt text](../Praktikum_18/unit-testing/img/image-28.png)
---

### Langkah 8 – Menangani Undefined Data

Jalankan `npm run test:coverage`<br>
![alt text](../Praktikum_18/unit-testing/img/image-26.png)<br>
![alt text](../Praktikum_18/unit-testing/img/image-23.png)<br>

Jika muncul error `Cannot read properties of undefined`, perbaiki di komponen pada file `index.tsx` pada folder `pages/produk`<br>
![alt text](../Praktikum_18/unit-testing/img/image-24.png)<br>
![alt text](../Praktikum_18/unit-testing/img/image-25.png)<br>
**Note:** Pastikan comment pada code yang ditunjukkan di 2 code testing<br>
![alt text](../Praktikum_18/unit-testing/img/image-27.png)<br>

**Analisis Coverage**<br>
![alt text](../Praktikum_18/unit-testing/img/image-22.png)<br>

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
   - Halaman Product <br>
   > Sudah pada Praktikum 7
   - 1 Komponen<br>
      - buat file `src/__test__/components/footer.spec.tsx`<br>
      ![alt text](../Praktikum_18/unit-testing/img/image-30.png)<br>
      ![alt text](../Praktikum_18/unit-testing/img/image-29.png)<br>
      - Modifikasi index.tsx pada folder `component/layouts/footer` untuk menambahkan `data-testid="footer"`<br>
      ![alt text](../Praktikum_18/unit-testing/img/image-31.png)<br>
      - hasil:<br>
      ![alt text](../Praktikum_18/unit-testing/img/image-32.png)<br>

2. Gunakan minimal:
   - 1 Snapshot test
   - 1 toBe()
   - 1 getByTestId()

   > Semua sudah diterapkan pada About dan Product

3. Buat coverage minimal 50%
   - file unit test yang sudah dibuat agar coverage diatas 50%<br>
   ![alt text](../Praktikum_18/unit-testing/img/image-34.png)<br>
   ![alt text](../Praktikum_18/unit-testing/img/image-35.png)<br>
   - pada index.html coverage<br>
   ![alt text](../Praktikum_18/unit-testing/img/image-33.png)<br>

4. Lakukan mocking untuk router
   > sudah dilakukan pada praktikum 7

5. Dokumentasikan hasil coverage
   > Yang dilakukan pada Praktikum ini merupakan dokumentasi dari hasil coverage

---

### Diskusi & Refleksi

1. Mengapa unit testing penting sebelum production?  
   > Unit testing membantu menemukan bug lebih awal, mencegah regresi saat ada perubahan kode, dan meningkatkan kepercayaan bahwa fitur berjalan sesuai kebutuhan sebelum dirilis.

2. Mengapa branch coverage sulit mencapai 100%?  
   > Karena setiap kemungkinan jalur logika (if/else, switch, error handling, edge case) harus diuji, termasuk kondisi langka yang tidak selalu mudah direproduksi.

3. Apa itu mocking?  
   > Mocking adalah teknik mengganti dependensi asli (misalnya router, API, database) dengan versi tiruan saat testing agar pengujian terkontrol, cepat, dan tidak bergantung sistem eksternal.

4. Kapan snapshot test digunakan?  
   > Snapshot test digunakan saat ingin memverifikasi output UI tetap konsisten dari waktu ke waktu, terutama untuk mendeteksi perubahan tampilan yang tidak disengaja.

5. Apakah semua file harus dites?  
   > Tidak harus semua file, tetapi file yang berisi logika penting, fitur kritikal, dan area berisiko tinggi wajib diprioritaskan untuk diuji.

---

### Kesimpulan

Dalam praktikum ini saya telah:

- Menginstal dan mengkonfigurasi Jest
- Menggunakan React Testing Library
- Membuat unit test pada pages
- Menghasilkan coverage report
- Melakukan mocking router
- Memahami pentingnya testing di industri
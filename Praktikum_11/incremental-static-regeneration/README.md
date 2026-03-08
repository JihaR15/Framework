## Praktikum 11 - Incremental Static Regeneration (ISR)

### Langkah 1: Tambahkan Revalidate

**1.1 Buka halaman static.tsx**
- Lokasi: `src/pages/produk`
- Tambahkan `revalidate: 10` untuk memeriksa ulang setiap 10 detik
- Jika ada perubahan data → cache diperbarui<br>
![alt text](image.png)

**1.2 Pengujian ISR**
- Jalankan: `npm run build && npm run start`<br>
![alt text](image-1.png)<br>
![alt text](image-4.png)<br>
- Tambahkan data baru di Firebase<br>
![alt text](image-3.png)<br>
- Produk Awal:<br>
![alt text](image-5.png)<br>
- 10 detik setelah penambahan dan di refresh<br>
![alt text](image-7.png)<br>
![alt text](image-6.png)<br>

> Refresh sebelum 10 detik → tampil data lama <br>
> Refresh setelah 10 detik → tampil data baru

### Langkah 2: On-Demand Revalidation

**2.1 Buat API Revalidate**
- Buat file `revalidate.ts` di `pages/api/`
![alt text](image-8.png)
![alt text](image-9.png)
- Endpoint dapat dipicu tanpa menunggu waktu revalidate
- coba tambah data baru
![alt text](image-10.png)
- setelah ditambahkan lalu di refresh tanpa menunggu 10 detik
![alt text](image-11.png)
- setelah data dihapus 
![alt text](image-12.png)

**2.2 Tambahkan Parameter Data**
- Modifikasi `revalidate.ts` dengan kondisi: `req.query.data === "produk"`
- Uji: `http://localhost:3000/api/revalidate?data=produk`

**2.3 Tambahkan Token Security**
- Buka file `.env` dan tambahkan token
- Modifikasi `revalidate.ts` (line 13-17) untuk validasi token
- Uji: `http://localhost:3000/api/revalidate?data=products&token=12345678`

### Langkah 3: Pengujian Manual

**Hasil sukses:**
```
{ revalidate: true }
```

**Uji dengan:**
- Token benar ✓
- Token salah ✗
- Tanpa token ✗

### Langkah 4: Tugas Praktikum

1. Tambahkan produk baru di Firebase
2. Implementasikan ISR dengan `revalidate: 10`
3. Buat endpoint On-Demand Revalidation
4. Validasi token pada endpoint
5. Uji semua skenario token

### Langkah 5: Pertanyaan Analisis

1. Mengapa ISR lebih fleksibel dibanding SSG?
2. Perbedaan revalidate waktu vs on-demand?
3. Mengapa endpoint revalidation harus diamankan?
4. Risiko jika token tidak digunakan?
5. Kapan ISR lebih cocok dibanding SSR?

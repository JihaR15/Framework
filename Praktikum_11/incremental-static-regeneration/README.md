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
- Buat file `revalidate.ts` di `pages/api/`<br>
![alt text](image-8.png)<br>
![alt text](image-9.png)<br>
- Endpoint dapat dipicu tanpa menunggu waktu revalidate<br>
- coba tambah data baru<br>
![alt text](image-10.png)<br>
- setelah ditambahkan lalu di refresh tanpa menunggu 10 detik<br>
![alt text](image-11.png)<br>
- setelah data dihapus <br>
![alt text](image-12.png)<br>

**2.2 Tambahkan Parameter Data**
- Modifikasi `revalidate.ts` dengan kondisi: `req.query.data === "produk"`<br>
![alt text](image-13.png)<br>
- Uji: `http://localhost:3000/api/revalidate?data=produk`<br>
![alt text](image-14.png)<br>
- `http://localhost:3000/api/revalidate?data=`
![alt text](image-15.png)<br>

**2.3 Tambahkan Token Security**
- Buka file `.env` dan tambahkan token<br>
![alt text](image-16.png)<br>
- Modifikasi `revalidate.ts` untuk validasi token<br>
![alt text](image-17.png)<br>
- Uji: `http://localhost:3000/api/revalidate?data=produk&token=12345678`<br>
![alt text](image-18.png)<br>

### Langkah 3: Pengujian Manual

**Uji dengan:**
- Token benar ✓<br>
![alt text](image-19.png)<br>
- Token salah ✗<br>
![alt text](image-20.png)<br>
- Tanpa token ✗<br>
![alt text](image-21.png)<br>
- token benar tapi parameter data salah<br>
![alt text](image-22.png)<br>

### Pertanyaan Analisis

1. Mengapa ISR lebih fleksibel dibanding SSG?
> ISR memperbarui halaman secara otomatis tanpa rebuild ulang. SSG harus rebuild seluruh proyek jika ada perubahan data, sedangkan ISR cukup tunggu waktu revalidate atau trigger manual.

2. Perbedaan revalidate waktu vs on-demand?
> Revalidate waktu: halaman diperbarui otomatis setelah X detik. On-demand: halaman diperbarui hanya saat Anda memanggil endpoint tertentu, lebih cepat dan hemat resource.

3. Mengapa endpoint revalidation harus diamankan?
> Tanpa keamanan, siapa saja bisa memanggil endpoint dan memaksa pembaruan halaman, yang bisa disalahgunakan untuk serangan atau pemborosan server.

4. Risiko jika token tidak digunakan?
> Endpoint revalidate bisa dipicu oleh orang asing, menyebabkan server sibuk terus-menerus memproses ulang data tanpa perlu, atau bahkan digunakan untuk sabotase.

5. Kapan ISR lebih cocok dibanding SSR?
> ISR cocok untuk halaman yang jarang berubah tapi perlu update berkala. SSR cocok untuk halaman yang selalu real-time. ISR lebih cepat dan hemat server dibanding SSR.

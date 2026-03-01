## Praktikum 05 - Custom Error & Document

### 1. Menjalankan Project
1. Buka folder project
2. Jalankan: `npm run dev`
3. Akses: `http://localhost:3000`<br>
![alt text](image.png)<br>

**Jika ada kendala tampilan:**
- Uninstall Tailwind: `npm uninstall tailwindcss postcss autoprefixer`
- Hapus file konfigurasi:
    - `tailwind.config.js`
    - `postcss.config.js`<br>
disini saya kembalikan ke sebelum memakai tailwind <br>
![alt text](image-1.png)<br>

### 2. Membuat Custom Document
- Masuk ke folder `pages/_document.js`
- Modifikasi dengan kode yang sesuai
![alt text](image-3.png) <br>
- Periksa di Inspect Element bahwa atribut `lang="id"` sudah berubah <br>
![alt text](image-2.png) <br>

### 3. Pengaturan Title per Halaman
1. Buka `pages/index.js`
2. Tambahkan title halaman <br>
![alt text](image-4.png)<br>
3. Refresh dan perhatikan judul tab browser <br>
![alt text](image-5.png)<br>

### 4. Membuat Custom Error Page (404)
- Buat file `pages/404.tsx`<br>
![alt text](image-6.png)<br>
isinya: <br>
![alt text](image-7.png) <br>
- Akses URL yang tidak ada, misalnya: `/dashboard`<br>
![alt text](image-8.png) <br>

### 5. Styling Halaman 404
1. Buat file `styles/404.module.scss`<br>
![alt text](image-10.png)<br>
![alt text](image-9.png)<br>
2. Modifikasi `pages/404.tsx` dengan style yang dibuat<br>
![alt text](image-11.png)<br>
![alt text](image-12.png)<br>
3. Untuk menghilangkan navbar, tambahkan `/404` pada daftar disable navbar<br>
![alt text](image-13.png)<br>
hasil: <br>
![alt text](image-14.png)<br>

### 6. Menampilkan Gambar dari Folder Public
1. Download gambar 404 dari https://undraw.co/<br>
![alt text](public/page-not-found.png)<br>
2. Simpan sebagai `public/page-not-found.png`<br>
![alt text](image-15.png)<br>
3. Modifikasi `404.tsx`: `<img src="/page-not-found.png" alt="404" className={styles.error__image} />`<br>
![alt text](image-16.png)<br>
hasil: <br>
![alt text](image-17.png)<br>

### E. Tugas Praktikum

**Tugas 1 (Wajib)**
- Tambahkan judul halaman, deskripsi, dan gambar ilustrasi

**Tugas 2 (Wajib)**
- Custom warna, font, dan layout halaman 404
- Navbar tidak tampil di halaman 404

**Tugas 3 (Pengayaan)**
- Tambahkan tombol "Kembali ke Home" dengan Next.js Link

### F. Pertanyaan Evaluasi
1. Apa fungsi utama `_document.js`?
    >
2. Mengapa `<title>` tidak disarankan di `_document.js`?
    >
3. Apa perbedaan halaman biasa dan halaman `404.js`?
    >
4. Mengapa folder public tidak perlu di-import?
    >

## Praktikum 05 - Custom Error & Document

- Nama: Jiha Ramdhan
- NIM: 2341720043
- Kelas: TI-3D

## Daftar Isi
- [1. Menjalankan Project](#1-menjalankan-project)
- [2. Membuat Custom Document](#2-membuat-custom-document)
- [3. Pengaturan Title per Halaman](#3-pengaturan-title-per-halaman)
- [4. Membuat Custom Error Page (404)](#4-membuat-custom-error-page-404)
- [5. Styling Halaman 404](#5-styling-halaman-404)
- [6. Menampilkan Gambar dari Folder Public](#6-menampilkan-gambar-dari-folder-public)
- [E. Tugas Praktikum](#e-tugas-praktikum)
- [F. Pertanyaan Evaluasi](#f-pertanyaan-evaluasi)

### 1. Menjalankan Project
1. Buka folder project
2. Jalankan: `npm run dev`
3. Akses: `http://localhost:3000`<br>
![alt text](../Praktikum_05/custom-error/img/image.png)<br>

**Jika ada kendala tampilan:**
- Uninstall Tailwind: `npm uninstall tailwindcss postcss autoprefixer`
- Hapus file konfigurasi:
    - `tailwind.config.js`
    - `postcss.config.js`<br>
disini saya kembalikan ke sebelum memakai tailwind <br>
![alt text](../Praktikum_05/custom-error/img/image-1.png)<br>

### 2. Membuat Custom Document
- Masuk ke folder `pages/_document.js`
- Modifikasi dengan kode yang sesuai
![alt text](../Praktikum_05/custom-error/img/image-3.png) <br>
- Periksa di Inspect Element bahwa atribut `lang="id"` sudah berubah <br>
![alt text](../Praktikum_05/custom-error/img/image-2.png) <br>

### 3. Pengaturan Title per Halaman
1. Buka `pages/index.js`
2. Tambahkan title halaman <br>
![alt text](../Praktikum_05/custom-error/img/image-4.png)<br>
3. Refresh dan perhatikan judul tab browser <br>
![alt text](../Praktikum_05/custom-error/img/image-5.png)<br>

### 4. Membuat Custom Error Page (404)
- Buat file `pages/404.tsx`<br>
![alt text](../Praktikum_05/custom-error/img/image-6.png)<br>
isinya: <br>
![alt text](../Praktikum_05/custom-error/img/image-7.png) <br>
- Akses URL yang tidak ada, misalnya: `/dashboard`<br>
![alt text](../Praktikum_05/custom-error/img/image-8.png) <br>

### 5. Styling Halaman 404
1. Buat file `styles/404.module.scss`<br>
![alt text](../Praktikum_05/custom-error/img/image-10.png)<br>
![alt text](../Praktikum_05/custom-error/img/image-9.png)<br>
2. Modifikasi `pages/404.tsx` dengan style yang dibuat<br>
![alt text](../Praktikum_05/custom-error/img/image-11.png)<br>
![alt text](../Praktikum_05/custom-error/img/image-12.png)<br>
3. Untuk menghilangkan navbar, tambahkan `/404` pada daftar disable navbar<br>
![alt text](../Praktikum_05/custom-error/img/image-13.png)<br>
hasil: <br>
![alt text](../Praktikum_05/custom-error/img/image-14.png)<br>

### 6. Menampilkan Gambar dari Folder Public
1. Download gambar 404 dari https://undraw.co/<br>
![alt text](../Praktikum_05/custom-error/public/page-not-found.png)<br>
2. Simpan sebagai `public/page-not-found.png`<br>
![alt text](../Praktikum_05/custom-error/img/image-15.png)<br>
3. Modifikasi `404.tsx`: `<img src="/page-not-found.png" alt="404" className={styles.error__image} />`<br>
![alt text](../Praktikum_05/custom-error/img/image-16.png)<br>
hasil: <br>
![alt text](../Praktikum_05/custom-error/img/image-17.png)<br>

### E. Tugas Praktikum

**Tugas 1 (Wajib)**
- Tambahkan judul halaman, deskripsi, dan gambar ilustrasi <br>
- Judul Halaman: <br>
![alt text](../Praktikum_05/custom-error/img/image-18.png)<br>
![alt text](../Praktikum_05/custom-error/img/image-19.png)<br>
    >  untuk deskripsi dan gambar ilustrasi sudah ditambahkan pada langkah ke 4-6

**Tugas 2 (Wajib)**
- Custom warna, font, dan layout halaman 404 <br>
`404.module.scss` disini saya menambahkan warna dan font family<br>
![alt text](../Praktikum_05/custom-error/img/image-20.png)<br>
`404.tsx` penerapan styles<br>
![alt text](../Praktikum_05/custom-error/img/image-21.png)<br>
Hasil:<br>
![alt text](../Praktikum_05/custom-error/img/image-22.png)<br>
- Navbar tidak tampil di halaman 404<br>
    > sudah diterapkan pada praktikum langkah 5 poin ke 3

**Tugas 3 (Pengayaan)**
- Tambahkan tombol "Kembali ke Home" dengan Next.js Link<br>
`404.module.scss` disini saya menambahkan style button untuk Linknya nanti<br>
![alt text](../Praktikum_05/custom-error/img/image-24.png)<br>
`404.tsx` tambahkan Link yang mengarah ke "/"<br>
![alt text](../Praktikum_05/custom-error/img/image-23.png)<br>
hasil<br>
![alt text](../Praktikum_05/custom-error/img/image-25.png)<br>

### F. Pertanyaan Evaluasi
1. Apa fungsi utama `_document.js`?
    > Mengatur struktur HTML dasar (tag `<html>`, `<head>`, `<body>`) yang berlaku untuk semua halaman di aplikasi Next.js.

2. Mengapa `<title>` tidak disarankan di `_document.js`?
    > Karena `<title>` harus unik untuk setiap halaman. Jika di-set di `_document.js`, semua halaman akan memiliki judul yang sama. 
    
3. Apa perbedaan halaman biasa dan halaman `404.js`?
    > Halaman biasa ditampilkan ketika user mengakses route yang valid. Halaman `404.js` adalah halaman khusus yang otomatis ditampilkan Next.js ketika user mengakses route yang tidak ada.

4. Mengapa folder public tidak perlu di-import?
    > Folder `public` di Next.js secara otomatis di-serve sebagai folder statis. File di dalamnya dapat diakses langsung melalui URL root (misal: `/page-not-found.png`), tanpa perlu import atau konfigurasi tambahan.


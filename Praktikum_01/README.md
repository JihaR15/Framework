## Praktikum 01 - My-app  

### 1. Pengecekan Lingkungan
![alt text](image.png)

### 2. Membuat Project Next.JS
![alt text](image-1.png)

### 3. Menjalankan Server Development
![alt text](image-2.png)<br>
![alt text](image-3.png)

### 4. Struktur Folder
![alt text](image-4.png)

### 5. Modifikasi Halaman Utama
![alt text](image-5.png) <br>
![alt text](image-6.png)

### 6. Modifikasi API
![alt text](image-7.png) <br>
![alt text](image-8.png) <br>
![alt text](image-9.png)

### 7. Modifikasi Background
![alt text](image-10.png) <br>
![alt text](image-11.png)

## Tugas Praktikum

### 1. Wajib

- Halaman baru about.js di folder pages
- Tampilkan:
  - Nama
  - NIM
  - Prodi
  <br>
![alt text](image-12.png)
<br>
![alt text](image-13.png)


### 2. Pengayaan
- Tambahkan minimal 1 link navigasi dari halaman utama ke halaman about. <br>
![alt text](image-14.png)
<br>
![alt text](msedge_BKnrVxo4H0.gif)


## Pertanyaan
1. **Mengapa Pages Router disebut sebagai routing berbasis file?**
   > Karena setiap file yang ditambahkan ke dalam folder `pages` secara otomatis akan menjadi rute tanpa perlu konfigurasi manual.

2. **Apa perbedaan Next.js dengan React standar (CRA)?**
   > Next.js itu Framework dari React, sedangkan React standar (CRA) itu library nya JavaScript. Next.js mendukung Server-Side Rendering (SSR) dan Static Site Generation (SSG) secara bawaan, namun bisa juga menggunakan Client-Side Rendering (CSR), sedangkan React standar (CRA) umumnya hanya menggunakan Client-Side Rendering (CSR).

3. **Apa fungsi perintah npm run dev?**
   > Menjalankan aplikasi dalam mode pengembangan (development mode) yang menyertakan fitur *hot reloading* untuk melihat perubahan kode secara langsung tanpa refresh manual. berjalan di localhost:3000

4. **Apa perbedaan npm run dev dan run build?**
   > `npm run dev` digunakan untuk proses pengembangan lokal, sedangkan `npm run build` digunakan untuk mengompilasi dan mengoptimalkan aplikasi menjadi versi produksi yang siap dideploy. perubahan kode tidak akan terlihat sampai di-build ulang.
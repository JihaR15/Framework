## Praktikum 16 - Implementasi Login Google Provider dengan NextAuth.js + Firebase

### Langkah 1 – Masuk ke Google Cloud Console
- Buka: https://console.cloud.google.com/apis/credentials

### Langkah 2 – Buat Project Baru
- Klik **New Project**<br>
- Nama project: `MyAppNext`<br>
- Klik **Create**<br>
![alt text](image.png)<br>
- Setelah berhasil, pastikan project adalah `MyAppNext` di https://console.cloud.google.com/apis/credentials<br>
![alt text](image-1.png)<br>

### Langkah 3 – Konfigurasi OAuth Consent Screen
1. Pilih **OAuth consent screen**<br>
![alt text](image-2.png)<br>
2. Pilih **Get Started**<br>
3. Isikan form yang muncul<br>
4. Klik **create**<br>
![alt text](image-3.png)<br>

### Langkah 4 – Buat OAuth Credentials
- Klik **create client** pada Clients<br>
![alt text](image-4.png)<br>
![alt text](image-5.png)<br>

### Langkah 5 – Tambahkan Environment Variables
![alt text](image-6.png)<br>
- Copy dan paste Client ID dan Client Secret ke `.env`<br>
![alt text](image-7.png)<br>

### Langkah 6 – Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session
- Buka file `[...nextauth].ts` pada folder `api/auth` dan modifikasi sesuai konfigurasi<br>
![alt text](image-8.png)<br>
![alt text](image-9.png)<br>
![alt text](image-10.png)<br>

### Langkah 7 – Tambahkan Button Login Google
1. Modifikasi file `index.tsx` pada folder `views/auth/login`<br>
![alt text](image-11.png)<br>
2. Jalankan browser `localhost:3000/auth/login` dan masuk melalui **Sign in with Google**<br>
3. Jika berhasil, akan terhubung dengan akun Google<br>
![alt text](logingoogle.gif)<br>

**Note:** Data akun Google tidak tersimpan dalam database

### Langkah 8 – Menampilkan Image dari Google
- Buka file `index.tsx` dan tambahkan code untuk menampilkan image
- Buka file `navbar.module.css` dan tambahkan styling
- Jika berhasil, tampilan akan menampilkan avatar dari Google

### Langkah 9 – Simpan Data Google ke Database
- Buka file `servicefirebase.ts` pada folder `src/utils/db/` dan tambahkan beberapa kode
- Panggil Service di JWT Callback di file `[...nextAuth].ts`
- Jalankan browser dan login menggunakan akun Google, cek di Firebase untuk verifikasi

### Langkah 10 – Pengujian
| Skenario | Hasil yang Diharapkan |
|----------|----------------------|
| Login Google pertama kali | Data tersimpan di Firestore |
| Login Google kedua kali | Data diupdate |
| User role member akses /admin | Redirect |
| User role admin akses /admin | Bisa masuk |
| Avatar tampil | Ya |

### Analisis & Diskusi
1. Apa perbedaan login credential dan login Google?
2. Mengapa data Google tetap perlu disimpan ke database?
3. Apa fungsi JWT callback?
4. Mengapa perlu multi-role?
5. Apa risiko jika tidak menyimpan user ke database?

### Tugas Mandiri
1. Tambahkan role editor
2. Buat halaman khusus editor
3. Tambahkan provider GitHub
4. Refactor service agar reusable
5. Gunakan `next/image` untuk optimasi avatar

### Kesimpulan
Pada praktikum ini mahasiswa telah:
- Mengimplementasikan Google OAuth
- Mengintegrasikan dengan NextAuth.js
- Menyimpan user ke Firestore
- Mengelola JWT dan Session
- Mengimplementasikan Multi-Role
- Menampilkan avatar profil

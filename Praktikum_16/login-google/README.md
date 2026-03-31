## Praktikum 16 - Implementasi Login Google Provider dengan NextAuth.js + Firebase

### Langkah 1 – Masuk ke Google Cloud Console
- Buka: https://console.cloud.google.com/apis/credentials

### Langkah 2 – Buat Project Baru
- Klik **New Project**
- Nama project: `MyAppNext`
- Klik **Create**
- Setelah berhasil, pastikan project adalah `MyAppNext` di https://console.cloud.google.com/apis/credentials

### Langkah 3 – Konfigurasi OAuth Consent Screen
1. Pilih **OAuth consent screen**
2. Pilih **Get Started**
3. Isikan form yang muncul
4. Klik **create**

### Langkah 4 – Buat OAuth Credentials
- Klik **create client** pada Clients

### C. Tambahkan Environment Variables
- Copy dan paste Client ID dan Client Secret ke `.env`

### D. Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session
- Buka file `[...nextauth].ts` pada folder `api/auth` dan modifikasi sesuai konfigurasi

### E. Tambahkan Button Login Google
1. Modifikasi file `index.tsx` pada folder `views/auth/login`
2. Jalankan browser `localhost:3000/auth/login` dan masuk melalui **Sign in with Google**
3. Jika berhasil, akan terhubung dengan akun Google

**Note:** Data akun Google tidak tersimpan dalam database

### F. Menampilkan Image dari Google
- Buka file `index.tsx` dan tambahkan code untuk menampilkan image
- Buka file `navbar.module.css` dan tambahkan styling
- Jika berhasil, tampilan akan menampilkan avatar dari Google

### G. Simpan Data Google ke Database
- Buka file `servicefirebase.ts` pada folder `src/utils/db/` dan tambahkan beberapa kode
- Panggil Service di JWT Callback di file `[...nextAuth].ts`
- Jalankan browser dan login menggunakan akun Google, cek di Firebase untuk verifikasi

### H. Pengujian
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

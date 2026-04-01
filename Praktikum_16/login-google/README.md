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
- Buka file `index.tsx` dan tambahkan code untuk menampilkan image<br>
![alt text](image-12.png)<br>
- Buka file `navbar.module.css` dan tambahkan styling<br>
![alt text](image-13.png)<br>
- Jika berhasil, tampilan akan menampilkan avatar dari Google<br>
![alt text](image-14.png)<br>

### Langkah 9 – Simpan Data Google ke Database
- Buka file `servicefirebase.ts` pada folder `src/utils/db/` dan tambahkan beberapa kode<br>
![alt text](image-15.png)<br>
- Panggil Service di JWT Callback di file `[...nextAuth].ts`<br>
![alt text](image-16.png)<br>
- Jalankan browser dan login menggunakan akun Google, cek di Firebase untuk verifikasi<br>
![alt text](image-17.png)<br>

### Langkah 10 – Pengujian
**Testing Checklist:**
1. Login Google pertama kali – Data tersimpan di Firestore
    ![alt text](testloginbarugoogle.gif)<br>
2. Login Google kedua kali – Data diupdate
   > hapus isi image di firebase, lalu login ulang untuk melihat data image terupdate atau tidak
   <br> 
    ![alt text](testlogin2.gif)<br>
3. User role member akses /admin – Redirect
    ![alt text](memberadmin.gif)<br>
4. User role admin akses /admin – Bisa masuk
    ![alt text](adminadmin.gif)<br>
5. Avatar tampil – Ya
    ![alt text](image-18.png)<br>


### Analisis & Diskusi
1. Apa perbedaan login credential dan login Google?
   > **Login Credential** pakai username dan password sendiri yang tersimpan di database aplikasi. **Login Google** langsung pake akun Google yang sudah ada, jadi tidak perlu buat password baru, Google yang jaga keamanannya.

2. Mengapa data Google tetap perlu disimpan ke database?
   > Supaya aplikasi bisa mengenali siapa yang login, bisa nyimpen data khusus tentang user, dan bisa ngeset role (admin atau member). Kalau tidak disimpan, aplikasi akan anggap setiap kali login itu orang baru.

3. Apa fungsi JWT callback?
   > JWT callback itu fungsi yang jalan saat bikin token login. Gunanya untuk memasukkan informasi tambahan ke token (seperti role atau ID user), jadi informasi itu tersedia di mana-mana tanpa perlu tanya database berkali-kali.

4. Mengapa perlu multi-role?
   > Biar bisa bedain hak akses tiap user. Admin bisa masuk halaman `/admin`, tapi member tidak boleh. Ini bikin aplikasi lebih aman dan terstruktur.

5. Apa risiko jika tidak menyimpan user ke database?
   > Aplikasi tidak bisa membedakan user mana yang siapa, tidak bisa tracking apa yang dilakukan user, tidak bisa ngeset role, dan tidak bisa simpan data custom. Setiap login dianggap orang baru, fitur aplikasi jadi terbatas dan tidak aman.

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

## Praktikum 16 - Implementasi Login Google Provider dengan NextAuth.js + Firebase

**Nama:** Jiha Ramdhan  
**NIM:** 2341720043  
**Kelas:** TI-3D

## Daftar Isi
1. [Langkah 1 – Masuk ke Google Cloud Console](#langkah-1--masuk-ke-google-cloud-console)
2. [Langkah 2 – Buat Project Baru](#langkah-2--buat-project-baru)
3. [Langkah 3 – Konfigurasi OAuth Consent Screen](#langkah-3--konfigurasi-oauth-consent-screen)
4. [Langkah 4 – Buat OAuth Credentials](#langkah-4--buat-oauth-credentials)
5. [Langkah 5 – Tambahkan Environment Variables](#langkah-5--tambahkan-environment-variables)
6. [Langkah 6 – Konfigurasi Google Provider di NextAuth](#langkah-6--konfigurasi-google-provider-di-nextauth-dan-handle-callback-jwt--session)
7. [Langkah 7 – Tambahkan Button Login Google](#langkah-7--tambahkan-button-login-google)
8. [Langkah 8 – Menampilkan Image dari Google](#langkah-8--menampilkan-image-dari-google)
9. [Langkah 9 – Simpan Data Google ke Database](#langkah-9--simpan-data-google-ke-database)
10. [Langkah 10 – Pengujian](#langkah-10--pengujian)
11. [Analisis & Diskusi](#analisis--diskusi)
12. [Tugas Mandiri](#tugas-mandiri)
13. [Kesimpulan](#kesimpulan)


### Langkah 1 – Masuk ke Google Cloud Console
- Buka: https://console.cloud.google.com/apis/credentials

### Langkah 2 – Buat Project Baru
- Klik **New Project**<br>
- Nama project: `MyAppNext`<br>
- Klik **Create**<br>
![alt text](../Praktikum_16/login-google/img/image.png)<br>
- Setelah berhasil, pastikan project adalah `MyAppNext` di https://console.cloud.google.com/apis/credentials<br>
![alt text](../Praktikum_16/login-google/img/image-1.png)<br>

### Langkah 3 – Konfigurasi OAuth Consent Screen
1. Pilih **OAuth consent screen**<br>
![alt text](../Praktikum_16/login-google/img/image-2.png)<br>
2. Pilih **Get Started**<br>
3. Isikan form yang muncul<br>
4. Klik **create**<br>
![alt text](../Praktikum_16/login-google/img/image-3.png)<br>

### Langkah 4 – Buat OAuth Credentials
- Klik **create client** pada Clients<br>
![alt text](../Praktikum_16/login-google/img/image-4.png)<br>
![alt text](../Praktikum_16/login-google/img/image-5.png)<br>

### Langkah 5 – Tambahkan Environment Variables
![alt text](../Praktikum_16/login-google/img/image-6.png)<br>
- Copy dan paste Client ID dan Client Secret ke `.env`<br>
![alt text](../Praktikum_16/login-google/img/image-7.png)<br>

### Langkah 6 – Konfigurasi Google Provider di NextAuth dan Handle Callback JWT & Session
- Buka file `[...nextauth].ts` pada folder `api/auth` dan modifikasi sesuai konfigurasi<br>
![alt text](../Praktikum_16/login-google/img/image-8.png)<br>
![alt text](../Praktikum_16/login-google/img/image-9.png)<br>
![alt text](../Praktikum_16/login-google/img/image-10.png)<br>

### Langkah 7 – Tambahkan Button Login Google
1. Modifikasi file `index.tsx` pada folder `views/auth/login`<br>
![alt text](../Praktikum_16/login-google/img/image-11.png)<br>
2. Jalankan browser `localhost:3000/auth/login` dan masuk melalui **Sign in with Google**<br>
3. Jika berhasil, akan terhubung dengan akun Google<br>
![alt text](../Praktikum_16/login-google/img/logingoogle.gif)<br>

**Note:** Data akun Google tidak tersimpan dalam database

### Langkah 8 – Menampilkan Image dari Google
- Buka file `index.tsx` dan tambahkan code untuk menampilkan image<br>
![alt text](../Praktikum_16/login-google/img/image-12.png)<br>
- Buka file `navbar.module.css` dan tambahkan styling<br>
![alt text](../Praktikum_16/login-google/img/image-13.png)<br>
- Jika berhasil, tampilan akan menampilkan avatar dari Google<br>
![alt text](../Praktikum_16/login-google/img/image-14.png)<br>

### Langkah 9 – Simpan Data Google ke Database
- Buka file `servicefirebase.ts` pada folder `src/utils/db/` dan tambahkan beberapa kode<br>
![alt text](../Praktikum_16/login-google/img/image-15.png)<br>
- Panggil Service di JWT Callback di file `[...nextAuth].ts`<br>
![alt text](../Praktikum_16/login-google/img/image-16.png)<br>
- Jalankan browser dan login menggunakan akun Google, cek di Firebase untuk verifikasi<br>
![alt text](../Praktikum_16/login-google/img/image-17.png)<br>

### Langkah 10 – Pengujian
**Testing Checklist:**
1. Login Google pertama kali – Data tersimpan di Firestore<br>
    ![alt text](../Praktikum_16/login-google/img/testloginbarugoogle.gif)<br>
2. Login Google kedua kali – Data diupdate<br>
   > hapus isi image di firebase, lalu login ulang untuk melihat data image terupdate atau tidak

   <br>

    ![alt text](../Praktikum_16/login-google/img/testlogin2.gif)<br>
3. User role member akses /admin – Redirect<br>
    ![alt text](../Praktikum_16/login-google/img/memberadmin.gif)<br>
4. User role admin akses /admin – Bisa masuk<br>
    ![alt text](../Praktikum_16/login-google/img/adminadmin.gif)<br>
5. Avatar tampil – Ya<br>
    ![alt text](../Praktikum_16/login-google/img/image-18.png)<br>


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

## Tugas Mandiri
### 1. Tambahkan role editor<br>
![alt text](../Praktikum_16/login-google/img/image-21.png)<br>
### 2. Buat halaman khusus editor<br>
- Buat file index.ts di folder pages/editor<br>
![alt text](../Praktikum_16/login-google/img/image-20.png)<br>
- Modifikasi index.ts<br>
![alt text](../Praktikum_16/login-google/img/image-38.png)<br>
- Modifikasi withAuth.ts<br>
![alt text](../Praktikum_16/login-google/img/image-36.png)<br>
![alt text](../Praktikum_16/login-google/img/image-41.png)<br>
- Modifikasi middleware.ts<br>
![alt text](../Praktikum_16/login-google/img/image-37.png)<br>
- Hasil<br>
![alt text](../Praktikum_16/login-google/img/image-35.png)<br>
### 3. Tambahkan provider GitHub<br>
- Daftar OAuth Github, di Setting > Developer Settings > OAuth Apps > New OAuth App<br>
![alt text](../Praktikum_16/login-google/img/image-19.png)<br>
- Isi Homepage URL dengan http://localhost:3000<br>
- Isi Authorization callback URL dengan http://localhost:3000/api/auth/callback/github<br>
![alt text](../Praktikum_16/login-google/img/image-22.png)<br>
- lalu Generate a new client secret<br>
![alt text](../Praktikum_16/login-google/img/image-23.png)<br>
- Update .env: Copy Client ID dan Client Secret dari Github dan masukkan ke file .env.local<br>
![alt text](../Praktikum_16/login-google/img/image-24.png)<br>
![alt text](../Praktikum_16/login-google/img/image-25.png)<br>
- Update [...nextauth].ts tambahkan GithubProvider<br>
![alt text](../Praktikum_16/login-google/img/image-39.png)<br>
- Modifikasi index.tsx pada views/auth/login<br>
![alt text](../Praktikum_16/login-google/img/image-30.png)<br>
- Hasil<br>
![alt text](../Praktikum_16/login-google/img/image-40.png)<br>
![alt text](../Praktikum_16/login-google/img/image-26.png)<br>
![alt text](../Praktikum_16/login-google/img/image-27.png)<br>
### 4. Refactor service agar reusable<br>
- Modifikasi servicefirebase.ts<br>
![alt text](../Praktikum_16/login-google/img/image-28.png)<br>
- Modifikasi [...nextauth].ts<br>
![alt text](../Praktikum_16/login-google/img/image-29.png)<br>
- Hasil<br>
![alt text](../Praktikum_16/login-google/img/image-31.png)<br>
![alt text](../Praktikum_16/login-google/img/image-32.png)<br>
### 5. Gunakan `next/image` untuk optimasi avatar<br>
- Ganti tag di index.tsx di navbar<br>
![alt text](../Praktikum_16/login-google/img/image-33.png)<br>
- Konfigurasi next.config.js agar tidak error<br>
![alt text](../Praktikum_16/login-google/img/image-34.png)<br>

### Kesimpulan
Pada praktikum ini saya telah:
- Mengimplementasikan Google OAuth
- Mengintegrasikan dengan NextAuth.js
- Menyimpan user ke Firestore
- Mengelola JWT dan Session
- Mengimplementasikan Multi-Role
- Menampilkan avatar profil


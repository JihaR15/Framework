## Praktikum 15 - Implementasi Login Database & Multi-Role

**Nama:** Jiha Ramdhan  
**NIM:** 2341720043  
**Kelas:** TI-3D

## Daftar Isi
1. [Langkah 1 – Custom Login Page](#langkah-1--custom-login-page)
2. [Langkah 2 – Handle Login di Frontend](#langkah-2--handle-login-di-frontend)
3. [Langkah 3 – Authorize di NextAuth (Database Login)](#langkah-3--authorize-di-nextauth-database-login)
4. [Langkah 4 – Tambahkan Role ke Token](#langkah-4--tambahkan-role-ke-token)
5. [Langkah 5 – Callback URL Logic](#langkah-5--callback-url-logic)
6. [Langkah 6 – Membuat Halaman Admin dan Authorisasi](#langkah-6--membuat-halaman-admin-dan-authorisasi)
7. [Pengujian](#pengujian)
8. [Struktur Database Users](#struktur-database-users)
9. [Perbandingan Sistem](#perbandingan-sistem)
10. [Pertanyaan Analisis](#pertanyaan-analisis)


### Langkah 1 – Custom Login Page
- Tambahkan custom page di NextAuth line 51-53<br>
![alt text](../Praktikum_15/login-multi-role/img/image-1.png)<br>
![alt text](../Praktikum_15/login-multi-role/img/image.png)<br>

- Jalankan browser http://localhost:3000/ dan klik sign in maka akan diarahkan ke login<br>
![alt text](../Praktikum_15/login-multi-role/img/custompage.gif)<br>

### Langkah 2 – Handle Login di Frontend
- Copy paste isi dari register/index.tsx ke file login/index.tsx<br>
![alt text](../Praktikum_15/login-multi-role/img/copytologin.gif)<br>
- Copy paste isi dari register/register.module.scss ke file login/login.module.scss<br>
![alt text](../Praktikum_15/login-multi-role/img/copytologinscss.gif)<br>
- Semua text register pada file index.tsx pada folder login diubah menjadi login<br>
![alt text](../Praktikum_15/login-multi-role/img/replacelogin.gif)<br>
- Jangan lupa setting link hrefnya<br>
![alt text](../Praktikum_15/login-multi-role/img/image-2.png)<br>
- Lakukan hal yang sama pada file login.module.scss rubah text register menjadi login<br>
![alt text](../Praktikum_15/login-multi-role/img/replaceloginscss.gif)<br>
- Cek pada file login.tsx pada pages/auth<br>
![alt text](../Praktikum_15/login-multi-role/img/image-3.png)<br>
- Jalankan browser localhost:3000/auth/login. Tampilannya akan sama dengan register<br>
![alt text](../Praktikum_15/login-multi-role/img/image-4.png)<br>
- Pada tampilan register kita tidak perlu hapus fullname, jadi pada folder views/auth/login/index.tsx hapus fullname<br>
![alt text](../Praktikum_15/login-multi-role/img/image-5.png)<br>
![alt text](../Praktikum_15/login-multi-role/img/image-6.png)<br>
- Buka file index.tsx pada folder views/auth/login dan modifikasi codenya seperti berikut (Untuk line 64 sampai kebawah tidak ada perubahan)<br>
- Note: pastikan tulisan password pada event.password.value pada line 48 sama dengan yang ada di database<br>
![alt text](../Praktikum_15/login-multi-role/img/image-8.png)<br>
![alt text](../Praktikum_15/login-multi-role/img/image-9.png)<br>
- Buka file servicefirebase.ts dan tambahkan code di line 25-38<br>
![alt text](../Praktikum_15/login-multi-role/img/image-7.png)<br>

### Langkah 3 – Authorize di NextAuth (Database Login)
- Buka file [...nextauth].ts modifikasi menjadi berikut (pada bagian providers)<br>
![alt text](../Praktikum_15/login-multi-role/img/image-11.png)<br>

### Langkah 4 – Tambahkan Role ke Token
- JWT Callback pada file [...nextauth].ts Modifikasi menjadi<br>
![alt text](../Praktikum_15/login-multi-role/img/image-10.png)<br>
- Jalankan browser http://localhost:3000/auth/login<br>
![alt text](../Praktikum_15/login-multi-role/img/login.gif)<br>

**Note ERROR:** Jika terdapat error seperti "head tag is being rendered inside a div", buka file `src/views/auth/login/index.tsx` dan tambahkan `<> </>` pada line 81 dan 150.<br>
![alt text](../Praktikum_15/login-multi-role/img/image-12.png)<br>
![alt text](../Praktikum_15/login-multi-role/img/image-13.png)<br>
modifikasi index.tsx juga agar menggunakan Home milik next/head<br>
![alt text](../Praktikum_15/login-multi-role/img/image-15.png)<br>
hasil<br>
![alt text](../Praktikum_15/login-multi-role/img/image-14.png)<br>


### Langkah 5 – Callback URL Logic
- Modifikasi withAuth.ts pada folder src/middleware<br>
![alt text](../Praktikum_15/login-multi-role/img/image-16.png)<br>
![alt text](../Praktikum_15/login-multi-role/img/callback.gif)<br>
- Tujuannya: Setelah login, user kembali ke halaman sebelumnya.<br>

### Langkah 6 – Membuat Halaman Admin dan Authorisasi
- Buat halaman admin<br>
![alt text](../Praktikum_15/login-multi-role/img/image-18.png)<br>
- Pada index.tsx tambahkan code berikut<br>
![alt text](../Praktikum_15/login-multi-role/img/image-17.png)<br>
- Modifikasi withAuth.ts<br>
![alt text](../Praktikum_15/login-multi-role/img/image-19.png)<br>
- Modifikasi middleware.ts<br>
![alt text](../Praktikum_15/login-multi-role/img/image-21.png)<br>
- Jalankan browser localhost:3000/produk dan pada status sudah login. Rubah urlnya menjadi http://localhost:3000/admin maka user akan diarahkan ke localhost. Pada intinya role selain admin tidak bisa mengakses<br>
![alt text](../Praktikum_15/login-multi-role/img/rolenonadmin.gif)<br>

<br>

- Untuk mencoba halaman admin rubah role pada firebase pada salah satu akun dan jalankan http://localhost:3000/admin<br>
![alt text](../Praktikum_15/login-multi-role/img/image-20.png)<br>
![alt text](../Praktikum_15/login-multi-role/img/admin.gif)<br>

## Pengujian

### Uji 1 – Login Valid
**Input:**
- Email benar
- Password benar

**Hasil:**
- Login berhasil
- Redirect sesuai callbackUrl
![alt text](../Praktikum_15/login-multi-role/img/uji1login.gif)

### Uji 2 – Password Salah
**Input:**
- Email benar
- Password salah

**Hasil:**
- Error message tampil
- Tidak login
![alt text](../Praktikum_15/login-multi-role/img/uji2login.gif)

### Uji 3 – Akses Admin sebagai User
**Login sebagai:**
- role: user

**Akses:** /admin

**Hasil:**
- Redirect ke home
![alt text](../Praktikum_15/login-multi-role/img/uji3loginadmin.gif)

### Uji 4 – Akses Admin sebagai Admin
**Login sebagai:**
- role: admin

**Akses:** /admin

**Hasil:**
- Bisa masuk halaman admin
![alt text](../Praktikum_15/login-multi-role/img/uji4login.gif)

## Struktur Database Users
**Collection: users**

| Field | Tipe |
|-------|------|
| email | string |
| password | string (hashed) |
| role | string |
| fullName | string |

## Perbandingan Sistem

| Fitur | Sebelum | Sekarang |
|-------|---------|---------|
| Login | Hardcoded | Database |
| Password | Plaintext | Hashed |
| Role | Tidak ada | Ada |
| Redirect | Manual | Callback URL |
| Middleware | Basic | Role-based |

## Pertanyaan Analisis

1. Mengapa password harus diverifikasi dengan bcrypt.compare?
    > Karena password disimpan dalam bentuk hash (terenkripsi), bukan plaintext. bcrypt.compare membandingkan password input pengguna dengan hash yang tersimpan di database untuk memastikan kecocokan tanpa perlu menyimpan password asli.

2. Mengapa role disimpan di token?
    > Agar server tidak perlu query database setiap kali mengecek otorisasi user. Token yang sudah berisi role memudahkan pengecekan izin akses ke halaman tertentu dengan cepat.

3. Apa fungsi callbackUrl?
    > callbackUrl menyimpan URL halaman sebelumnya saat user login, sehingga setelah berhasil login, user akan diarahkan kembali ke halaman tersebut bukan selalu ke home.

4. Mengapa middleware penting untuk security?
    > Middleware berjalan di sisi server dan melakukan pengecekan autentikasi & otorisasi sebelum user bisa mengakses halaman. Ini mencegah akses tidak sah ke halaman tertentu seperti admin.

5. Apa risiko jika role tidak dicek di middleware?
    > User dengan role biasa bisa langsung mengakses halaman admin hanya dengan mengubah URL, karena pengecekan hanya terjadi di frontend yang mudah dimanipulasi.


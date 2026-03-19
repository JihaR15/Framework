## Praktikum 14 - Implementasi Sistem Registrasi (Database Integration)

### Langkah 1 – Membuat Register View
- Buat folder pada views/auth dengan nama register dan tambahkan 2 file yaitu index.tsx dan register.module.scss<br>
![alt text](../Praktikum_14/auth-register/img/image.png)<br>
- Buka file register.tsx pada folder auth/register.tsx dan Modifikasi file register.tsx (pada folder pages/auth/register.tsx)<br>
![alt text](../Praktikum_14/auth-register/img/image-1.png)<br>
- Modifikasi register.module.scss<br>
![alt text](../Praktikum_14/auth-register/img/image-2.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-3.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-4.png)<br>
- Tambahkan form inputan pada file index.tsx (pada folder views/auth/register/index.tsx) dengan field:<br>
    - Email<br>
    ![alt text](../Praktikum_14/auth-register/img/image-5.png)<br>
    - Full Name<br>
    ![alt text](../Praktikum_14/auth-register/img/image-6.png)<br>
    - Password<br>
    ![alt text](../Praktikum_14/auth-register/img/image-7.png)<br>
    - Button Register<br>
    ![alt text](../Praktikum_14/auth-register/img/image-8.png)<br>
- Jalankan browser di http://localhost:3000/auth/register<br>
![alt text](../Praktikum_14/auth-register/img/image-9.png)<br>

### Langkah 2 – Membuat API Register
- Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi<br>
![alt text](../Praktikum_14/auth-register/img/image-10.png)<br>
> disini ada yang dibedakan dari jobsheet agar bisa saat klik register masuk ke menu login, soalnya kalo mengikuti jobsheet pasti tidak mengarah ke auth/login dan di error 400
<br>

![alt text](../Praktikum_14/auth-register/img/image-11.png)<br>
- Buat file register.ts pada folder api<br>
![alt text](../Praktikum_14/auth-register/img/image-12.png)<br>
- Modifikasi file register.ts<br>
![alt text](../Praktikum_14/auth-register/img/image-13.png)<br>
- Modifikasi index.tsx pada folder register (tambahkan beberapa code)<br>
![alt text](../Praktikum_14/auth-register/img/image-14.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-15.png)<br>
- Buka browser http://localhost:3000/auth/register, isikan data dan klik register. Jika berhasil maka akan masuk ke menu login<br>
![alt text](../Praktikum_14/auth-register/img/apiregister.gif)<br>

### Langkah 3 – Install bcrypt
- npm install bcrypt --force<br>
![alt text](../Praktikum_14/auth-register/img/image-16.png)<br>
- npm install --save-dev @types/bcrypt --force<br>
![alt text](../Praktikum_14/auth-register/img/image-17.png)<br>
- Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi<br>
![alt text](../Praktikum_14/auth-register/img/image-18.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-19.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-20.png)<br>
- Jalankan browser http://localhost:3000/auth/register dan input data setelah itu klik register<br>
![alt text](../Praktikum_14/auth-register/img/image-21.png)<br>
- Buka Firebase jika berhasil maka data register akan masuk<br>
![alt text](../Praktikum_14/auth-register/img/image-22.png)<br>
- Tambahkan notifikasi error untuk email duplikat pada index.tsx<br>
![alt text](../Praktikum_14/auth-register/img/image-25.png)<br>
- Tambahkan loading indicator saat klik register<br>
![alt text](../Praktikum_14/auth-register/img/image-26.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-24.png)<br>
- Setelah ditambahkan<br>
![alt text](../Praktikum_14/auth-register/img/image-23.png)<br>

### Langkah 4 – Pengujian

**Uji 1 – Register Baru**
- Input: Email baru
- Hasil: Data tersimpan di Firestore, password ter-hash, redirect ke login<br>
![alt text](../Praktikum_14/auth-register/img/uji1register.gif)<br>

**Uji 2 – Email Sudah Ada**<br>
- Input: Email yang sama<br>
- Hasil: Error 400 dengan message "Email already exists"<br>
![alt text](../Praktikum_14/auth-register/img/uji2register.gif)<br>

**Uji 3 – Method GET**<br>
- Akses: /api/register<br>
- Hasil: 405 Method Not Allowed<br>
![alt text](../Praktikum_14/auth-register/img/image-27.png)<br>

### Tugas Praktikum
1. Implementasikan register terhubung database (Sudah Terhubung)<br>
2. Tambahkan validasi: Email wajib, Password minimal 6 karakter<br>
- modifikasi index.tsx<br>
![alt text](../Praktikum_14/auth-register/img/image-30.png)<br>
- menambahkan field required dan minLength untuk password<br>
![alt text](../Praktikum_14/auth-register/img/image-31.png)<br>
- hasil<br>
![alt text](../Praktikum_14/auth-register/img/image-28.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-29.png)<br>
3. Tambahkan role default "member"<br>
- modifikasi servicefirebase.ts<br>
![alt text](../Praktikum_14/auth-register/img/image-32.png)<br>
4. Tampilkan pesan error di UI<br>
- bisa jika mematikan required dan minLength<br>
![alt text](../Praktikum_14/auth-register/img/image-33.png)<br>
![alt text](../Praktikum_14/auth-register/img/image-34.png)<br>
5. Screenshot hasil: Register sukses, Email sudah ada, Database Firestore<br>
- Register berhasil dan ada di firestore dengan role member<br>
![alt text](../Praktikum_14/auth-register/img/tugaspraktikumregister.gif)<br>
- Register jika akun sudah ada<br>
![alt text](../Praktikum_14/auth-register/img/tugaspraktikumregister2.gif)<br>

### Pertanyaan Analisis

1. Mengapa password harus di-hash?
    > Password di-hash agar tidak tersimpan dalam bentuk teks biasa di database. Jika database diretas, hacker tidak dapat langsung menggunakan password tersebut karena sudah dienkripsi. Hash adalah proses satu arah, sehingga tidak bisa dikembalikan ke password asli.

2. Apa perbedaan addDoc dan setDoc?
    > `addDoc` membuat dokumen baru dengan ID otomatis yang di-generate oleh Firebase. `setDoc` membuat atau menimpa dokumen dengan ID spesifik yang kita tentukan sendiri. Gunakan `addDoc` ketika ID tidak penting, gunakan `setDoc` ketika ingin ID tertentu.

3. Mengapa perlu validasi method POST?
    > Validasi method POST memastikan API hanya menerima request POST dan menolak method lain seperti GET atau DELETE. Ini mencegah penyalahgunaan endpoint dan meningkatkan keamanan aplikasi.

4. Apa risiko jika email tidak dicek unik?
    > Jika email tidak dicek unik, user bisa mendaftar dengan email yang sama berkali-kali. Ini menyebabkan data duplikat di database dan user bisa login dengan banyak akun sekaligus, menimbulkan kebingungan dan masalah data integrity.

5. Apa fungsi role pada user?
    > Role menentukan level akses dan izin user dalam aplikasi. Misalnya "member" adalah user biasa, "admin" memiliki akses lebih tinggi. Ini membantu mengontrol apa yang boleh dilakukan setiap user.


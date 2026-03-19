## Praktikum 14 - Implementasi Sistem Registrasi (Database Integration)

### Langkah 1 – Membuat Register View
- Buat folder pada views/auth dengan nama register dan tambahkan 2 file yaitu index.tsx dan register.module.scss<br>
![alt text](image.png)<br>
- Buka file register.tsx pada folder auth/register.tsx dan Modifikasi file register.tsx (pada folder pages/auth/register.tsx)<br>
![alt text](image-1.png)<br>
- Modifikasi register.module.scss<br>
![alt text](image-2.png)<br>
![alt text](image-3.png)<br>
![alt text](image-4.png)<br>
- Tambahkan form inputan pada file index.tsx (pada folder views/auth/register/index.tsx) dengan field:<br>
    - Email<br>
    ![alt text](image-5.png)<br>
    - Full Name<br>
    ![alt text](image-6.png)<br>
    - Password<br>
    ![alt text](image-7.png)<br>
    - Button Register<br>
    ![alt text](image-8.png)<br>
- Jalankan browser di http://localhost:3000/auth/register<br>
![alt text](image-9.png)<br>

### Langkah 2 – Membuat API Register
- Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi<br>
![alt text](image-10.png)<br>
> disini ada yang dibedakan dari jobsheet agar bisa saat klik register masuk ke menu login, soalnya kalo mengikuti jobsheet pasti tidak mengarah ke auth/login dan di error 400
<br>

![alt text](image-11.png)<br>
- Buat file register.ts pada folder api<br>
![alt text](image-12.png)<br>
- Modifikasi file register.ts<br>
![alt text](image-13.png)<br>
- Modifikasi index.tsx pada folder register (tambahkan beberapa code)<br>
![alt text](image-14.png)<br>
![alt text](image-15.png)<br>
- Buka browser http://localhost:3000/auth/register, isikan data dan klik register. Jika berhasil maka akan masuk ke menu login<br>
![alt text](apiregister.gif)<br>

### Langkah 3 – Install bcrypt
- npm install bcrypt --force<br>
![alt text](image-16.png)<br>
- npm install --save-dev @types/bcrypt --force<br>
![alt text](image-17.png)<br>
- Buka file servicefirebase.ts pada folder src/utils/db dan modifikasi<br>
![alt text](image-18.png)<br>
![alt text](image-19.png)<br>
![alt text](image-20.png)<br>
- Jalankan browser http://localhost:3000/auth/register dan input data setelah itu klik register<br>
![alt text](image-21.png)<br>
- Buka Firebase jika berhasil maka data register akan masuk<br>
![alt text](image-22.png)<br>
- Tambahkan notifikasi error untuk email duplikat pada index.tsx<br>
![alt text](image-25.png)<br>
- Tambahkan loading indicator saat klik register<br>
![alt text](image-26.png)<br>
![alt text](image-24.png)<br>
- Setelah ditambahkan<br>
![alt text](image-23.png)<br>

### Langkah 4 – Pengujian

**Uji 1 – Register Baru**
- Input: Email baru
- Hasil: Data tersimpan di Firestore, password ter-hash, redirect ke login<br>
![alt text](uji1register.gif)<br>

**Uji 2 – Email Sudah Ada**<br>
- Input: Email yang sama<br>
- Hasil: Error 400 dengan message "Email already exists"<br>
![alt text](uji2register.gif)<br>

**Uji 3 – Method GET**<br>
- Akses: /api/register<br>
- Hasil: 405 Method Not Allowed<br>
![alt text](image-27.png)<br>

### Tugas Praktikum
1. Implementasikan register terhubung database (Sudah Terhubung)<br>
2. Tambahkan validasi: Email wajib, Password minimal 6 karakter<br>
- modifikasi index.tsx<br>
![alt text](image-30.png)<br>
- menambahkan field required dan minLength untuk password<br>
![alt text](image-31.png)<br>
- hasil<br>
![alt text](image-28.png)<br>
![alt text](image-29.png)<br>
3. Tambahkan role default "member"<br>
- modifikasi servicefirebase.ts<br>
![alt text](image-32.png)<br>
4. Tampilkan pesan error di UI<br>
- bisa jika mematikan required dan minLength<br>
![alt text](image-33.png)<br>
![alt text](image-34.png)<br>
5. Screenshot hasil: Register sukses, Email sudah ada, Database Firestore<br>
- Register berhasil dan ada di firestore dengan role member<br>
![alt text](tugaspraktikumregister.gif)<br>
- Register jika akun sudah ada<br>
![alt text](tugaspraktikumregister2.gif)<br>

### Pertanyaan Analisis
1. Mengapa password harus di-hash?
2. Apa perbedaan addDoc dan setDoc?
3. Mengapa perlu validasi method POST?
4. Apa risiko jika email tidak dicek unik?
5. Apa fungsi role pada user?

## Praktikum 03 - Link Navigation  

### 1. Test Run Project
![alt text](image.png) <br>
![alt text](image-1.png) <br>

### 2. Membuat Catch-All Route
- pada folder pages, Buat folder shop dan file […slug].tsx <br>
![alt text](image-3.png) <br>
- Isi file  […slug].tsx
![alt text](image-5.png) <br>
![alt text](image-4.png) <br>
- Cek menggunakan console.log 
![alt text](image-2.png) <br>
- Modifikasi [...slug].tsx untuk menampilkan nilai query 
![alt text](image-6.png) <br>

### 3.  Pengujian Catch-All Route
- /shop/clothes<br>
![alt text](image-7.png) <br>
- /shop/clothes/tops <br>
![alt text](image-8.png)<br>
- /shop/clothes/tops/t-shirt <br>
![alt text](image-9.png)<br>
ada yang tidak terbaca ini dikarenakan segmennya dibatasi Cuma array[0] dan array[1]. 
- Modifikasi […slug].tsx <br>
![alt text](image-10.png) <br>
- Berapapun banyaknya segment tetap terbaca  
![alt text](image-11.png) <br>
![alt text](image-12.png) <br>

### 4. Optional Catch-All Route 
- jika mengakses /shop saja maka akan terjadi error
![alt text](image-13.png) <br>
-  Rename file: [...slug].js → [[...slug]].js agar tidak error saat hanya mengakses /shop<br>
![alt text](image-15.png) <br>
- hasil
![alt text](image-14.png) <br>


### 5. Validasi Parameter
- Menambah validasi agar tidak error saat slug kosong <br>
![alt text](image-16.png) <br>
![alt text](image-17.png) <br>

### 6. Membuat Halaman Login & Register
- pada folder pages, buat folder auth, lalu buat file login.tsx dan register.tsx<br>
![alt text](image-18.png) <br>
- login.tsx <br>
![alt text](image-19.png)<br>
- register.tsx <br>
![alt text](image-20.png)<br>
- hasil
![alt text](auth.webp) <br>

### 7. Navigasi Imperatif (router.push) 
- tambah button login: mengarah ke /produk <br>
![alt text](image-21.png) <br>
- Hasil <br>
![alt text](buttonlogin.webp) <br>
#### Perbandingan Penggunaan onClick di React
| Kode | Cara Kerja | Dipanggil Saat | Kelebihan | Kekurangan | Rekomendasi |
|------|------------|---------------|-----------|------------|-------------|
| `onClick={handlerLogin}` | Mengirim referensi fungsi | Tombol diklik | Bersih, efisien, best practice | Tidak bisa kirim parameter langsung | ✅ Sangat direkomendasikan |
| `onClick={() => push('/produk')}` | Arrow function memanggil fungsi | Tombol diklik | Praktis untuk navigasi sederhana | Kurang reusable jika logika bertambah | ✅ Cocok untuk navigasi sederhana |
| `onClick={() => handlerLogin()}` | Arrow function membungkus fungsi | Tombol diklik | Fleksibel kirim parameter | Redundant jika tanpa parameter | ⚠ Gunakan jika perlu argumen |
| `onClick={handlerLogin()}` | Fungsi langsung dieksekusi | Saat render | - | ❌ Bug: tidak menunggu klik | 🚫 Tidak direkomendasikan |

### 8. Simulasi Redirect (Belum Login)
- pada index.tsx tambahkan beberapa code <br>
![alt text](image-22.png) <br>
- Jika Akses /product → otomatis diarahkan ke login. <br>
![alt text](redirectlogin.webp)<br>

## Tugas Praktikum

### Tugas 1 (Wajib)
- Buat catch-all route: 
    - /category/[...slug].jsx <br>
    ![alt text](image-23.png) <br>
    - Tampilkan seluruh parameter URL dalam bentuk list. <br>
    ![alt text](image-24.png) <br>
    ![alt text](image-25.png) <br>

### Tugas 2 (Wajib)
- Buat navigasi: 
    - Login → Product (imperatif). 
    > sebenarnya sudah diterapkan pada praktikum langkah 7. namun dikarenakan ada redirect pada langkah 8, membuat button login ketika di klik dia membuka /produk sekejap, lalu langsung redirect ke login, jadi login yang sudah dibuat tidak mau masuk ke produk, cara mengatasi adalah dengan menghapus redirect pada langkah 8. maka login yang sudah dibuat berhasil masuk ke produk. 
    ![alt text](image-26.png)<br>
    > tapi ada juga cara lain yaitu dengan menyimpan sesi login di local storage, sehingga redirect tetap ada dan perlu ditambahkan button logout untuk menghapus sesi login.
    ![alt text](image-27.png) <br>
    ![alt text](image-28.png) <br>
    karena hanya ditambahkan di handlerLogin, jadi login yang bagian tengah tidak berhasil masuk ke produk. karena langsung pakai push("/produk") dan tidak menyimpan sesi di localStorage.
    ![alt text](tugas2.webp) <br>

    - Login ↔ Register (Link) 
    sudah diterapkan pada praktikum langkah 6.

### Tugas 3 (Pengayaan)
- Terapkan redirect otomatis ke login jika user belum login. 
> sebenarnya sudah diterapkan juga, namun disini saya akan ubah agar tidak hanya pada /produk, tapi page lain harus ke page login dulu.
- modifikasi _app.tsx, index.tsx pada pages/produk, dan login.tsx pada pages/auth/login.
- _app.tsx
![alt text](image-29.png) <br>
![alt text](image-30.png) <br>
- index.tsx pada pages/produk <br>
![alt text](image-31.png) <br>
- login.tsx pada pages/auth/login <br>
![alt text](image-32.png)<br>

- hasil <br>
![alt text](tugas3.webp)<br>


## Pertanyaan Refleksi
1. **Apa perbedaan [id].js dan [...slug].js?**
    >
2. **Mengapa slug berbentuk array?**
    >
3. **Kapan sebaiknya menggunakan Link dan router.push()?** 
    >
4. **Mengapa navigasi Next.js tidak me-refresh halaman?**
    >




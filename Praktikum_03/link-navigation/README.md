## Praktikum 03 - Link Navigation  

### 1. Test Run Project
![alt text](image.png) <br>
![alt text](image-1.png) <br>

### 2. Membuat Catch-All Route
- pada folder pages, Buat folder shop dan file […slug].tsx <br>
- Isi file  […slug].tsx
- Cek menggunakan console.log 
- Modifikasi [...slug].tsx untuk menampilkan nilai query 

### 3.  Pengujian Catch-All Route
- /shop/clothes<br>
- /shop/clothes/tops <br>
- /shop/clothes/tops/t-shirt <br>
ada yang tidak terbaca ini dikarenakan segmennya dibatasi Cuma array[0] dan array[1]. 
- Modifikasi […slug].tsx <br>

### 4. Optional Catch-All Route 
-  Rename file: [...slug].js → [[...slug]].js agar tidak error saat hanya mengakses /shop<br>


### 5. Validasi Parameter
- Menambah validasi agar tidak error saat slug kosong <br>

### 6. Membuat Halaman Login & Register
- pada folder pages, buat folder auth, lalu buat file login.jsx dan register.jsx<br>
- login.jsx <br>
- register.jsx <br>

### 7. Navigasi Imperatif (router.push) 
- tambah button login:

### 8. Simulasi Redirect (Belum Login)
- pada index.tsx tambahkan beberapa code
- Jika Akses /product → otomatis diarahkan ke login.

## Tugas Praktikum

### Tugas 1 (Wajib)
- Buat catch-all route: 
    - /category/[...slug].js 
    - Tampilkan seluruh parameter URL dalam bentuk list. 


### Tugas 2 (Wajib)
- Buat navigasi: 
    - Login → Product (imperatif) 
    - Login ↔ Register (Link) 

### Tugas 3 (Pengayaan)
- Terapkan redirect otomatis ke login jika user belum login

## Pertanyaan Refleksi
1. **Apa perbedaan [id].js dan [...slug].js?**
    >
2. **Mengapa slug berbentuk array?**
    >
3. **Kapan sebaiknya menggunakan Link dan router.push()?** 
    >
4. **Mengapa navigasi Next.js tidak me-refresh halaman?**
    >




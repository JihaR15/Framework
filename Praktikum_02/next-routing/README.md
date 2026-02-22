## Praktikum 02 - Next Routing  

### 1. Routing Dasar (Static Routing)
- membuat File baru about.tsx di dalam folder pages <br>
![alt text](image-2.png) <br>
![alt text](image.png) <br>
- matikan css pada file _app.tsx <br>
![alt text](image-1.png) <br>
![alt text](image-3.png)

### 2. Routing Menggunakan Folder
- membuat folder about di dalam folder pages, lalu pindah about.tsx ke dalam folder tersebut dan rename menjadi index.tsx <br>
![alt text](image-4.png) <br>
![alt text](image-5.png)

### 3. Nested Routing
- membuat folder setting di dalam folder pages berisi user.tsx dan app.tsx <br>
![alt text](image-6.png) <br>
- user.tsx <br>
![alt text](image-7.png) <br>
![alt text](image-9.png) <br>
- app.tsx <br>
![alt text](image-8.png) <br>
![alt text](image-10.png) <br>

#### Modifikasi struktur folder pages dengan menambahkan folder user, lalu user.tsx yang ada pada setting, itu dipindah ke folder user. kemudian ubah nama file user.tsx menjadi index.tsx <br>
![alt text](image-12.png) <br>
![alt text](image-11.png) <br>

#### Nested Lebih Dalam <br>
- menambah folder password pada folder user, dan tambahkan file index.tsx <br>
![alt text](image-13.png) <br>
![alt text](image-14.png) <br>
![alt text](image-15.png) <br>

### 4. Dynamic Routing
- membuat folder produk di dalam folder pages, lalu tambahkan file index.tsx dan [id].tsx <br>
![alt text](image-16.png)<br>
- index.tsx <br>
![alt text](image-17.png)<br>
- [id].tsx bersama console.log menggunakan extension Console Ninja<br>
![alt text](image-18.png) <br>
![alt text](image-19.png)
![alt text](image-21.png)

#### modifikasi [id].tsx agar dapat mengambil nilai dari id
![alt text](image-20.png) <br>
- produk/sepatu <br>
![alt text](image-22.png) <br>
- produk/baju <br>
![alt text](image-23.png) <br>
- produk/helm-baru <br>
![alt text](image-24.png) <br>

### 5. Membuat Component Navbar
- membuat file index.tsx di dalam folder component/layouts/navbar <br>
![alt text](image-26.png) <br>
- component/layouts/navbar/index.tsx <br>
![alt text](image-27.png) <br>
- style/globals.css <br>
![alt text](image-28.png) <br>
- pages/index.tsx <br>
![alt text](image-29.png) <br>
- pages/app.tsx <br>
![alt text](image-30.png) <br>
- navbar muncul dan hanya tampil di index page awal, karena yang ditambahkan hanya di page tersebut
![alt text](image-25.png)<br>

#### Modifikasi Navbar agar muncul di semua page <br>
- hapus navbar pada file index.tsx<br>
![alt text](image-31.png) <br>
- tambahkan pada app.tsx <br>
![alt text](image-32.png) <br>
- hasil <br>
![alt text](image-33.png)
![alt text](image-34.png)
![alt text](image-35.png)
![alt text](image-36.png)

### 6. Membuat Layout Global (App Shell)
- buat folder appshell di dalam folder component/layouts <br>
![alt text](image-37.png) <br>
- component/layouts/appshell/index.tsx <br>
![alt text](image-38.png) <br>

### 7. Implementasi Layout di _app.tsx
- pages/_app.tsx <br>
![alt text](image-39.png) <br>

#### Sebelum AppShell
![alt text](sebelumappshell.webp) <br>
#### Sesudah AppShell
![alt text](setelahappshell.webp) <br>

## Tugas Praktikum

### Tugas 1 - Routing
1. buat Routing: <br>
![alt text](image-40.png) <br>
    - /profile <br>
    ![alt text](image-41.png) <br>
    - /profile/edit <br>
    ![alt text](image-42.png)

output: <br>
![alt text](image-43.png) <br>
![alt text](image-44.png) <br>

### Tugas 2 - Dynamic Routing
1. buat routing /blog/[slug] <br>
![alt text](image-45.png) <br>
![alt text](image-46.png) <br>

output: <br>
![alt text](image-47.png) <br>

### Tugas 3 - Layout
1. Tambahkan Footer pada AppShell dan tampil di semua halaman. <br>

- Sudah dilakukan pada Langkah ke 7, disini saya hanya mengubah style nya saja.
- style/globals.css <br>
![alt text](image-48.png) <br>
- component/layouts/Appshell/index.tsx <br>
![alt text](image-49.png) <br>

Output: <br>
![alt text](image-50.png) <br>

## Pertanyaan Refleksi
1. **Apa perbedaan routing berbasis file dan routing manual?**
    > Routing berbasis file secara otomatis memetakan struktur folder dan file menjadi jalur URL (contohnya seperti yang sudah dilakukan pada praktikum ini dengan Next.js), sedangkan routing manual memerlukan pendefinisian setiap rute secara eksplisit di dalam kode (seperti di React Router, atau saat menggunakan laravel).

2. **Mengapa dynamic routing penting dalam aplikasi web?**
    > Karena memungkinkan aplikasi untuk menangani konten yang bersifat variabel atau berjumlah banyak (seperti ID produk atau slug blog) hanya dengan satu template file, sehingga lebih efisien dan skalabel.

3. **Apa keuntungan menggunakan layout global dibanding memanggil komponen satu per satu?**
    > Menjamin agar UI di seluruh halaman konsisten, dan  mempermudah pemeliharaan kode karena perubahan cukup dilakukan di satu file (App Shell), terus juga mencegah render ulang komponen yang sama (seperti Navbar/Footer) saat navigasi.




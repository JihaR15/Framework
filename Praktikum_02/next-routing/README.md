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
- pages/_app.tsx <br>
![alt text](image-39.png) <br>

#### Sebelum
![alt text](sebelumappshell.webp) <br>
#### Sesudah 
![alt text](setelahappshell.webp) <br>





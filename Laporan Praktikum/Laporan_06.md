## Praktikum 06 - API Routes

### Langkah 1 – Menjalankan Project
- `npm run dev`
- Akses: http://localhost:3000<br>
![alt text](../Praktikum_06/api-routes/img/image.png)<br>

### Langkah 2 – Membuat API Produk
1. Buat file `pages/api/produk.ts`<br>
![alt text](../Praktikum_06/api-routes/img/image-1.png)<br>
2. Tambahkan data statis<br>
![alt text](../Praktikum_06/api-routes/img/image-2.png)<br>
![alt text](../Praktikum_06/api-routes/img/image-3.png)<br>
3. Akses: http://localhost:3000/api/produk<br>
![alt text](../Praktikum_06/api-routes/img/image-4.png)<br>

### Langkah 3 – Fetch Data API di Frontend
1. Buka `views/produk/MainSection.tsx`<br>
    - Modifikasi kode<br>
    ![alt text](../Praktikum_06/api-routes/img/image-5.png)<br>
    ![alt text](../Praktikum_06/api-routes/img/image-6.png)<br>
2. Jalankan browser: http://localhost:3000/produk<br>
![alt text](../Praktikum_06/api-routes/img/image-7.png)<br>

## Integrasi Firebase

### Langkah 5 – Setup Firebase
1. Buka Firebase Console (login dengan Google)<br>
![alt text](../Praktikum_06/api-routes/img/image-8.png)<br>
    - **Note:** Jangan lupa select parent resource<br>
    ![alt text](../Praktikum_06/api-routes/img/image-11.png)<br>
    - **Note:** Klik create project dan disable Google Analytics<br>
    ![alt text](../Praktikum_06/api-routes/img/image-10.png)<br>
    ![alt text](../Praktikum_06/api-routes/img/image-12.png)<br>
    - **Note:** Klik add app dan pilih web<br>
    ![alt text](../Praktikum_06/api-routes/img/image-13.png)<br>
    - **Note:** Klik register app<br>
    ![alt text](../Praktikum_06/api-routes/img/image-14.png)<br>
    - **Note:** Klik continue to console<br>
    ![alt text](../Praktikum_06/api-routes/img/image-15.png)<br>

2. Aktifkan Firestore Database<br>
    - Klik create database<br>
    ![alt text](../Praktikum_06/api-routes/img/image-16.png)<br>
    ![alt text](../Praktikum_06/api-routes/img/image-17.png)<br>
    - Ubah rules menjadi `true` dan klik publish<br>
    ![alt text](../Praktikum_06/api-routes/img/image-18.png)<br>

3. Buat collection: `produk`
    - Gunakan auto-id<br>
    ![alt text](../Praktikum_06/api-routes/img/image-19.png)<br>

### Langkah 6 – Install Firebase
1. `npm install firebase`<br>
![alt text](../Praktikum_06/api-routes/img/image-20.png)<br>
2. Buat folder dan file: `pages/utils/db/firebase.ts`<br>
![alt text](../Praktikum_06/api-routes/img/image-21.png)<br>
3. Copy paste konfigurasi ke file `firebase.ts`<br>
![alt text](../Praktikum_06/api-routes/img/image-22.png)<br>

### Langkah 7 – Konfigurasi Environment Variable
1. Buat file: `.env.local`<br>
![alt text](../Praktikum_06/api-routes/img/image-23.png)<br>
2. Modifikasi file `.env`:
    ```
    FIREBASE_API_KEY=xxxx
    FIREBASE_AUTH_DOMAIN=xxxx
    FIREBASE_PROJECT_ID=xxxx
    FIREBASE_STORAGE_BUCKET=xxxx
    FIREBASE_MESSAGING_SENDER_ID=xxxx
    FIREBASE_APP_ID=xxxx
    ```
    <br>
    
    ![alt text](../Praktikum_06/api-routes/img/image-24.png)<br>

### Langkah 8 – Konfigurasi Firebase
- Modifikasi `firebase.ts`<br>
![alt text](../Praktikum_06/api-routes/img/image-25.png)<br>

### Langkah 9 – Ambil Data dari Firestore
1. Buat file: `utils/db/servicefirebase.js`<br>
![alt text](../Praktikum_06/api-routes/img/image-26.png)<br>
2. Modifikasi file `servicefirebase.js`<br>
![alt text](../Praktikum_06/api-routes/img/image-27.png)<br>

### Langkah 10 – API Mengambil Data Firebase
1. Edit `pages/api/product.ts`<br>
![alt text](../Praktikum_06/api-routes/img/image-29.png)<br>
2. Jalankan browser: http://localhost:3000/api/produk<br>
![alt text](../Praktikum_06/api-routes/img/image-28.png)<br>
3. Modifikasi `MainSection.tsx` pada `views/produk` sesuaikan nama type dan database<br>
![alt text](../Praktikum_06/api-routes/img/image-30.png)<br>
![alt text](../Praktikum_06/api-routes/img/image-32.png)<br>
hasil<br>
![alt text](../Praktikum_06/api-routes/img/image-31.png)<br>

## E. Tugas Praktikum

### Tugas 1 (Wajib)
- Tambahkan minimal 3 data produk di Firestore<br>
![alt text](../Praktikum_06/api-routes/img/image-33.png)<br>
- Pastikan data tampil di halaman produk<br>
![alt text](../Praktikum_06/api-routes/img/image-34.png)<br>

### Tugas 2 (Wajib)
- Tambahkan field baru: `category`<br>
![alt text](../Praktikum_06/api-routes/img/image-35.png)<br>
- Tampilkan category di frontend<br>
- `MainSection.tsx` <br>
![alt text](../Praktikum_06/api-routes/img/image-36.png) <br>
![alt text](../Praktikum_06/api-routes/img/image-37.png) <br>
- hasil <br>
![alt text](../Praktikum_06/api-routes/img/image-38.png)<br>

### Tugas 3 (Pengayaan)
- Tambahkan tombol Refresh Data<br>
- Gunakan fetch ulang tanpa reload halaman<br>
![alt text](../Praktikum_06/api-routes/img/image-40.png)<br>
![alt text](../Praktikum_06/api-routes/img/image-39.png)<br>
![alt text](../Praktikum_06/api-routes/img/updatedata.gif)<br>
![alt text](../Praktikum_06/api-routes/img/refreshdata.gif)<br>

## F. Pertanyaan Evaluasi
1. Apa fungsi API Routes pada Next.js?
    > API Routes memungkinkan pembuat aplikasi membuat endpoint backend langsung di folder `pages/api/`, sehingga bisa menangani request HTTP tanpa perlu server terpisah.

2. Mengapa `.env.local` tidak boleh di-push ke repository?
    > Karena file `.env.local` berisi kunci rahasia (API key, kredensial database) yang tidak boleh dibagikan publik untuk mencegah akses tidak sah ke layanan.

3. Apa perbedaan data statis dan data dinamis?
    > Data statis tidak berubah dan disimpan langsung dalam kode, sedangkan data dinamis bersumber dari database dan bisa berubah sesuai kebutuhan.

4. Mengapa Next.js disebut framework fullstack?
    > Karena Next.js dapat menangani frontend (tampilan website) dan backend (API) dalam satu project, sehingga developer bisa membuat aplikasi lengkap tanpa tools terpisah.


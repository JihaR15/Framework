## Praktikum 04 - Styling  

### 1. Global CSS
- `styles/globals.css` <br>
![alt text](image.png) <br>
- `pages/_app.tsx` <br>
![alt text](image-1.png)<br>

### 2. CSS Module (Local Scope)
**a. Struktur Komponen Navbar** <br>
`src/components/layout/Navbar/` <br>
├── `index.tsx` <br>
└── `Navbar.module.css` <br>
![alt text](image-2.png) <br>
**b. File CSS Module** <br>
- Modifikasi `global.css` <br>
![alt text](image-4.png) <br>
- Modifikasi `navbar.module.css` <br>
![alt text](image-3.png)<br>
**c. Pemanggilan di Komponen** <br>
- Modifikasi kode pada `index.tsx` pada folder navbar <br>
![alt text](image-5.png)<br>
- Jalankan browser <br>
![alt text](image-6.png)<br>

### 3. Styling Untuk Pages (CSS Module)
- Tambahkan `login.module.css` pada folder `auth` <br>
![alt text](image-7.png)<br>
- Modifikasi `login.module.css` <br>
![alt text](image-8.png)<br>
- Modifikasi `login.tsx` <br>
    - Tambahkan `import styles from "./login.module.css"` <br>
    - Tambahkan `className={styles.login}` <br>
![alt text](image-9.png)<br>
- Jalankan browser <br>
![alt text](image-10.png)<br>

### 4. Conditional Rendering Navbar (Tanpa Navbar di Login)
- Modifikasi `index.tsx` pada folder `AppShell` <br>
    - `import { useRouter } from "next/router";` <br>
    - `const disableNavbar = ["/auth/login", "/auth/register"];` <br>
    - `const { pathname } = useRouter();` <br>
    - `{!disableNavbar.includes(pathname) && <Navbar />}` <br>
![alt text](image-11.png)<br>
- Jalankan browser <br>
![alt text](image-12.png)<br>

### 5. Refactoring Struktur Project (Best Practice)
**a. Struktur Awal (Kurang Rapi)** <br>
![alt text](image-13.png)<br>
**b. Struktur Refactor (Disarankan)** <br>
`src/views/auth/Login/` <br>
├── `index.tsx` <br>
└── `Login.module.css` <br>
![alt text](image-14.png)<br>
**c. Langkah-langkah Refactoring** <br>
- Modifikasi `Login.module.css` pada folder `src/views/auth/Login/` <br>
![alt text](image-15.png)<br>
- Hapus `login.module.css` pada folder `pages/auth/` <br>
![alt text](image-16.png)<br>
- Modifikasi `login.tsx` pada folder `pages/auth/` <br>
![alt text](image-17.png)<br>
- Modifikasi `index.tsx` pada folder `views/auth/login` <br>
![alt text](image-18.png)<br>
- Jalankan browser <br>
![alt text](image-19.png)<br>
    > • Routing tetap bersih <br>
    > • Logic & UI terpisah <br>
    > • Mudah dikembangkan <br>

### 6. Inline Styling (CSS-in-JS)

- Modifikasi `index.tsx` pada folder `views/auth/login` <br>
    - `<h1 style={{ color: "red", border:"1px solid red", borderRadius: "5px", padding: "5px" }}>Belum Punya Akun</h1>` <br>
    ![alt text](image-20.png)<br>
- Jalankan browser <br>
![alt text](image-21.png)<br>

**Catatan Penting:** <br>
- Menggunakan camelCase (contoh: `borderRadius: "10px"`) <br>
- Cocok untuk styling kecil & dinamis <br>
- Tidak disarankan untuk layout besar <br>

### 7. Kombinasi Global CSS + CSS Module
- Modifikasi `globals.css` <br>
![alt text](image-22.png)<br>
- Modifikasi `index.tsx` pada folder `components/layouts/navbar` <br>
    - `<div className="big">navbar</div>` <br>
![alt text](image-23.png)<br>

**Kesimpulan:**
- Global CSS → utility umum & reusable <br>
- CSS Module → styling spesifik komponen <br>

### 8. SCSS (SASS)
**a. Install SASS**
![alt text](image-24.png) <br>
- Cek `package.json` untuk memastikan instalasi berhasil <br>
![alt text](image-25.png) <br>

**b. Global Variable**
- Tambahkan `colors.scss` pada folder `styles`<br>
![alt text](image-27.png)<br>
- Modifikasi `colors.scss`<br>
![alt text](image-29.png)<br>

**c. Gunakan di Module**
- Tambahkan file `login.module.scss` pada folder `views/auth/login/`<br>
![alt text](image-28.png)<br>
- Modifikasi `index.tsx`
    - `import styles from "./login.module.scss"`
    - Hapus `import styles from "./login.module.css"`<br>
![alt text](image-31.png)<br>
- Modifikasi `login.module.scss`
    - `background-color: map-get($map: $schema, $key: color-secondary);`<br>
![alt text](image-30.png)<br>
- Jalankan browser<br>
![alt text](image-26.png)<br>

**Keunggulan SCSS:**
- Variable → Simpan warna, font, ukuran di satu tempat
- Nested rule → Struktur CSS mengikuti struktur HTML
- Maintainable → Ideal untuk project skala besar<br>

### 9. Tailwind CSS
**a. Install** <br>
- `npm install -D tailwindcss postcss autoprefixer` <br>
![alt text](image-32.png) <br>
- `npx tailwindcss init -p` <br>
![alt text](image-33.png) <br>
    - Jika terjadi error, downgrade versi tailwindcss <br>
    ![alt text](image-34.png) <br>

**b. Konfigurasi tailwind.config.js** <br>
![alt text](image-35.png)<br>

**c. Import di Global CSS** <br>
- `@tailwind base;` <br>
- `@tailwind components;` <br>
- `@tailwind utilities;` <br>
![alt text](image-37.png)<br>

**d. Contoh Penggunaan** <br>
- Modifikasi `index.tsx` pada folder `views/auth/login/` <br>
    - `<h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>` <br>
![alt text](image-38.png)<br>
- Jalankan browser <br>
![alt text](image-36.png)<br>

**Keunggulan Tailwind CSS:** <br>
- Utility-first → Styling langsung di markup <br>
- Responsive → Built-in breakpoints <br>
- Efisien → Hanya include CSS yang digunakan <br>


## Tugas Praktikum

### Tugas 1
- Buat halaman Register
- Gunakan CSS Module

### Tugas 2
- Refactor halaman Produk ke folder views
- Pisahkan Hero Section dan Main Section

### Tugas 3
- Terapkan Tailwind CSS
- Gunakan minimal 5 utility class

## F. Pertanyaan Refleksi
1. **Kapan sebaiknya menggunakan CSS Module dibanding Global CSS?**
    >
2. **Apa kelemahan inline styling?**
    >
3. **Mengapa SCSS cocok untuk project skala besar?**
    >
4. **Apa keunggulan Tailwind dibanding CSS tradisional?**
    >







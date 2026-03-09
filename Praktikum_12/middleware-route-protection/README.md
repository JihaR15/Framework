## Praktikum 12 - Middleware & Route Protection

### Langkah 1 – Membuat Middleware
- Modifikasi file `index.tsx` pada folder `src/pages/produk`<br>
![alt text](image.png)<br>
- Buat file: `src/middleware.ts` sejajar dengan folder `pages`<br>
![alt text](image-1.png)<br>

### Langkah 2 – Struktur Dasar Middleware
- Jika menggunakan `NextResponse.next()` → tidak ada redirect<br>
![alt text](image-2.png)<br>
- Masih bisa mengakses ke `http://localhost:3000/produk`<br>

### Langkah 3 – Redirect Sederhana
- Semua halaman akan redirect ke home
- Error dikarenakan terus-menerus loading

### Langkah 4 – Batasi Route Tertentu
- Middleware hanya berlaku untuk `/products` dan `/about`
- Halaman lain tetap normal
- User yang mengakses produk dan about akan redirect ke home

### Langkah 5 – Simulasi Sistem Login
- Modifikasi file `middleware.ts`
- Jika user mengakses `http://localhost:3000/produk` tanpa login, akan diarahkan ke halaman login

### Langkah 6 – Pengujian
- **Uji 1:** `isLogin = false` → Akses `/products` → Redirect ke `/login`
- **Uji 2:** `isLogin = true` → Bisa mengakses `/products`
- **Uji 3:** Tambahkan multiple route dengan matcher: `['/products', '/about']`

### Analisis Perbandingan
| Aspek | useEffect | Middleware |
|-------|-----------|-----------|
| Timing | Setelah render | Sebelum render |
| Glitch | Ada | Tidak |
| Security | Lemah | Lebih aman |
| Skalabilitas | Per halaman | Sekali setup |

### Pertanyaan Analisis
1. Mengapa middleware lebih aman dibanding useEffect?
2. Mengapa middleware tidak menimbulkan glitch?
3. Apa risiko jika semua halaman diproteksi tanpa pengecualian?
4. Kapan middleware tidak diperlukan?
5. Apa perbedaan middleware dan API route?

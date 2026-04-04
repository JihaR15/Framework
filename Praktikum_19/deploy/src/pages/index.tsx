import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const menuGroups = [
    {
      category: "Main Features",
      items: [
        { title: "Katalog Produk", path: "/produk", icon: "🛍️", desc: "Lihat daftar semua produk" },
        { title: "Toko / Shop", path: "/shop", icon: "🛒", desc: "Halaman belanja utama" },
        { title: "Blog Artikel", path: "/blog/welcome", icon: "📝", desc: "Baca artikel terbaru" },
      ]
    },
    {
      category: "Dashboard & Admin",
      items: [
        { title: "Admin Panel", path: "/admin", icon: "🛡️", desc: "Kelola data sistem" },
        { title: "Editor Mode", path: "/editor", icon: "✍️", desc: "Tulis dan edit konten" },
        { title: "Manajemen User", path: "/user", icon: "👥", desc: "Daftar pengguna terdaftar" },
      ]
    },
    {
      category: "Account & Settings",
      items: [
        { title: "Profil Saya", path: "/profile", icon: "👤", desc: "Lihat detail profil" },
        { title: "Edit Profil", path: "/profile/edit", icon: "⚙️", desc: "Ubah data diri" },
        { title: "Pengaturan App", path: "/setting/app", icon: "🛠️", desc: "Konfigurasi aplikasi" },
      ]
    },
    {
      category: "Information",
      items: [
        { title: "Tentang Kami", path: "/about", icon: "ℹ️", desc: "Info tentang project ini" },
        { title: "Test 404", path: "/halaman-ngasal", icon: "🚧", desc: "Cek halaman error" },
      ]
    }
  ];

  return (
    <div className={`${inter.className} ${styles.container}`}>
      <Head>
        <title>Praktikum Next.js Pages Router</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Praktikum Next.JS Pages Router</h1>
        <p className={styles.subtitle}>Mahasiswa D4 Teknik Informatika - Politeknik Negeri Malang</p>
      </header>

      <main className={styles.main}>
        {menuGroups.map((group, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{group.category}</h2>
            <div className={styles.grid}>
              {group.items.map((item, idx) => (
                <Link href={item.path} key={idx} className={styles.card}>
                  <div className={styles.cardIcon}>{item.icon}</div>
                  <div className={styles.cardContent}>
                    <h3>{item.title} <span>&rarr;</span></h3>
                    <p>{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

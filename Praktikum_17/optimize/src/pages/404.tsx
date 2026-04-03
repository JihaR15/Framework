import styles from '@/styles/404.module.scss'
import Link from 'next/dist/client/link'
import Image from 'next/image'

const Custom404 = () => {
  return (
    <div className={styles.error}>
        <head>
            <title>404 - Halaman Tidak Ditemukan</title>
        </head>
        <Image
            src="/page-not-found.png"
            alt="404"
            width={400}
            height={200}
            className={styles._image}
            priority
        />
        <h1 className={styles._text_red}>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, Halaman yang anda cari tidak ada.</p>
        <Link href="/" className={styles._button}>Kembali ke Beranda</Link>
    </div>
  )
}

export default Custom404
import styles from '@/styles/404.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/page-not-found.png"
              alt="Ilustrasi 404"
              width={400}
              height={300}
              className={styles.image}
              // priority
            />
          </div>
          
          {/* <h1 className={styles.title}>404</h1> */}
          <h2 className={styles.subtitle}>404, Halaman Tidak Ditemukan</h2>
          <p className={styles.description}>
            Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya, atau tidak pernah ada.
          </p>
          
          <Link href="/" className={styles.button}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  )
}

export default Custom404
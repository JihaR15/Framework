import styles from '@/styles/404.module.scss'

const Custom404 = () => {
  return (
    <div className={styles.error}>
        <img src="/page-not-found.png" alt="404" className={styles._image} />
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, Halaman yang anda cari tidak ada.</p>
    </div>
  )
}

export default Custom404
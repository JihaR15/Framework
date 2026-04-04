import { ProductType } from "@/types/Product.type";
import styles from "./detailProduk.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const DetailProduk = ({ products }: { products: ProductType }) => {
  const router = useRouter();
  if (!products) return null;

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.backButton}
        onClick={() => router.back()}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Kembali ke Daftar Produk
      </button>

      <div className={styles.detailCard}>
        <div className={styles.detailCard__imageWrapper}>
          <Image
            src={products.image}
            alt={products.nama}
            fill
            className={styles.detailCard__image}
            unoptimized
            priority
          />
        </div>

        <div className={styles.detailCard__info}>
          <span className={styles.detailCard__category}>
            {products.kategori}
          </span>
          <h1 className={styles.detailCard__name}>{products.nama}</h1>
          <p className={styles.detailCard__price}>
            Rp {products.harga?.toLocaleString("id-ID")}
          </p>

          <div className={styles.detailCard__divider}></div>

          <div className={styles.detailCard__description}>
            <h3>Deskripsi Produk</h3>
            <p>
              Ini adalah detail dari <strong>{products.nama}</strong>. Dirancang
              dengan kualitas terbaik untuk memenuhi kebutuhan Anda sehari-hari.
              Material premium memastikan produk ini awet dan nyaman digunakan.
            </p>
          </div>

          {/* <div className={styles.detailCard__actions}>
            <button className={styles.btnPrimary}>Tambah ke Keranjang</button>
            <button
              className={styles.btnSecondary}
              aria-label="Tambah ke favorit"
              title="Tambah ke favorit"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;

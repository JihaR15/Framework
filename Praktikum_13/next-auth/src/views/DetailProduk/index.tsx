import { ProductType } from "@/types/Product.type";
import styles from "./detailProduk.module.scss";
import Link from "next/dist/client/link";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          <img src={products.image && products.image} alt={products.nama} />
        </div>

        <div className={styles.produkdetail__info}>
          <button 
            type="button"
            className={styles.produkdetail__button}
            onClick={() => window.history.back()}
          >
            {"< "}
            Kembali ke Daftar Produk
          </button>
          <h1 className={styles.produkdetail__name}>{products.nama}</h1>
          <p className={styles.produkdetail__category}>{products.kategori}</p>
          <p className={styles.produkdetail__price}>
            Rp {products.harga && products.harga.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;

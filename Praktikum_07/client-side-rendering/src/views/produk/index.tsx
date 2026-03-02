import styles from "@/pages/produk/produk.module.scss";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  image: string;
  kategori: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
      {products.map((products: ProductType) => (
        <div key={products.id} className={styles.produk__content__item}>
          <div className={styles.produk__content__item__image}>
            <img src={products.image} alt={products.nama} width={200} />
          </div>
          <h4 className={styles.produk__content__item__name}>
            {products.nama}
          </h4>
          <p className={styles.produk__content__item__category}>
            {products.kategori}
          </p>
          <p className={styles.produk__content__item__price}>
            Rp {products.harga.toLocaleString()}
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TampilanProduk;

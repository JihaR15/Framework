import styles from "@/pages/produk/produk.module.scss";
import Link from "next/link";
import Image from "next/image";

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
      <div className={styles.produk__header}>
        <h1 className={styles.produk__title}>Katalog Produk</h1>
        <p className={styles.produk__subtitle}>Temukan koleksi terbaik kami</p>
      </div>

      <div className={styles.produk__content}>
        {products?.length > 0 ? (
          <>
            {products.map((product: ProductType) => (
              <Link
                href={`/produk/${product.id}`}
                key={product.id}
                className={styles.produk__content__item}
              >
                <div className={styles.produk__content__item__image}>
                  <Image
                    src={product.image}
                    alt={product.nama}
                    width={300}
                    height={300}
                    priority
                    unoptimized
                  />
                </div>
                <div className={styles.produk__content__item__info}>
                  <p className={styles.produk__content__item__category}>
                    {product.kategori}
                  </p>
                  <h4 className={styles.produk__content__item__name}>
                    {product.nama}
                  </h4>
                  <p className={styles.produk__content__item__price}>
                    Rp {product.harga.toLocaleString("id-ID")}
                  </p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={styles.produk__content__skeleton}>
                <div className={styles.produk__content__skeleton__image}></div>
                <div className={styles.produk__content__skeleton__info}>
                  <div className={styles.produk__content__skeleton__category}></div>
                  <div className={styles.produk__content__skeleton__name}></div>
                  <div className={styles.produk__content__skeleton__price}></div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;
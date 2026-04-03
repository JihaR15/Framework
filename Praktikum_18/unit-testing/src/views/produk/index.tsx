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
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products?.length > 0 ? (
          <>
            {products?.map((products: ProductType) => (
              <Link
                href={`/produk/${products.id}`}
                key={products.id}
                className={styles.produk__content__item}
              >
                <div className={styles.produk__content__item__image}>
                  <Image
                    src={products.image}
                    alt={products.nama}
                    width={200}
                    height={200}
                    priority
                  />
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
              </Link>
            ))}
          </>
        ) : (
          <div className={styles.produk__content__skeleton}>
            <div className={styles.produk__content__skeleton__image}></div>
            <div className={styles.produk__content__skeleton__name}></div>
            <div className={styles.produk__content__skeleton__category}></div>
            <div className={styles.produk__content__skeleton__price}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;

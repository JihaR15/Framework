import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  kategori: string;
};

const MainSection = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/produk");
      const data = await res.json();
      setProducts(data.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={fetchProducts}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Refresh Data"}
      </button>

      <div>
        {products.map((produk:ProductType) => (
          <div key={produk.id} className="border p-4 rounded shadow">
            <h3>{produk.nama}</h3>
            <p>Kategori: {produk.kategori}</p>
            <p>Harga: Rp {produk.harga.toLocaleString()}</p>
            <p>Ukuran: {produk.ukuran}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;

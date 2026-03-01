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

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div>

      {/* <div className="mx-4">
        <h3 className="text-xl font-bold">Produk Gweh</h3>
        <p className="text-gray-600">Ini deskripsi singkat buat Produk Gweh</p>
      </div> */}

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

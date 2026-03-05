import { useRouter } from "next/router";

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router);
    const router = useRouter();
    console.log(router);
    const { produk } = router.query;

    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk: {produk}</p>
        </div>
    );
};

export default HalamanProduk;

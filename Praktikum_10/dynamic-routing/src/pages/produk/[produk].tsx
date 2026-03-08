import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetches";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduk";

const HalamanProduk = () => {
    // const Router = useRouter();
    // console.log(Router);
    const { query } = useRouter();
    // console.log(router);
    // const { produk } = router.query;

    const {data, error, isLoading} = useSWR(`/api/produk/${query.produk}`, fetcher);

    return (
        <div>
            <DetailProduk products={isLoading ? [] : data.data}/>
        </div>
    );
};

export default HalamanProduk;

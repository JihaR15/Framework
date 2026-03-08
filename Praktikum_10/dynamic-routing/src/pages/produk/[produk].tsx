import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetches";
import useSWR from "swr";
import DetailProduk from "@/views/DetailProduk";
import { ProductType } from "@/types/Product.type";

const HalamanProduk = ( { products }: { products: ProductType }) => {
    // // const Router = useRouter();
    // // console.log(Router);
    // const { query } = useRouter();
    // // console.log(router);
    // // const { produk } = router.query;

    // const {data, error, isLoading} = useSWR(`/api/produk/${query.produk}`, fetcher);

    // return (
    //     <div>
    //         <DetailProduk products={isLoading ? [] : data.data}/>
    //     </div>
    // );

    return (
        <div>
            <DetailProduk products={products}/>
        </div>
    );

};

export default HalamanProduk;

export async function getServerSideProps({ params }: { params: { produk: string } }) {
    const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
    const response = await res.json();

    return {
        props: {
            products: response.data
        }
    };
}
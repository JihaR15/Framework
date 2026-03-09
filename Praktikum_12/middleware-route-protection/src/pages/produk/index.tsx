import TampilanProduk from "@/views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "@/utils/swr/fetches";

const produk = () => {

    const { push } = useRouter();
    const [products, setProducts] = useState([]);

    const { data, error, isLoading } = useSWR("/api/produk", fetcher);
    
    return (
        <>
            <TampilanProduk products={isLoading ? [] : data.data } />
        </>
    );
};

export default produk; 
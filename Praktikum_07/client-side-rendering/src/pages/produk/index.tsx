import HeroSection from "@/views/produk/HeroSection";
import MainSection from "@/views/produk/MainSection";
import TampilanProduk from "@/views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "@/pages/utils/swr/fetches";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const produk = () => {
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch("/api/produk")
    //         .then((res) => res.json())
    //         .then((responsedata) => {
    //             setProducts(responsedata.data);
    //             console.log("Data produk:", responsedata);
    //         })
    //         .catch((err) => {
    //             console.error("Error fetching produk:", err);
    //         });
    // }, []);

    const { data, error, isLoading } = useSWR("/api/produk", fetcher);
    
    return (
        <>
            {/* <HeroSection />
            <MainSection /> */}
            <TampilanProduk products={isLoading ? [] : data.data } />
        </>
    );
};

export default produk; 
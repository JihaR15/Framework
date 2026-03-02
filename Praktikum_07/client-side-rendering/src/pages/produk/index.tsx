import HeroSection from "@/views/produk/HeroSection";
import MainSection from "@/views/produk/MainSection";
import TampilanProduk from "@/views/produk";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/api/produk")
            .then((res) => res.json())
            .then((responsedata) => {
                setProducts(responsedata.data);
                console.log("Data produk:", responsedata);
            })
            .catch((err) => {
                console.error("Error fetching produk:", err);
            });
    }, []);
    
    return (
        <>
            {/* <HeroSection />
            <MainSection /> */}
            <TampilanProduk products={products} />
        </>
    );
};

export default produk; 
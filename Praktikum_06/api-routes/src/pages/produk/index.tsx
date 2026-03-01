import HeroSection from "@/views/produk/HeroSection";
import MainSection from "@/views/produk/MainSection";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const produk = () => {
    // const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();
    useEffect(() => {
        const isLogin = localStorage.getItem("isLogin");

        if (!isLogin) {
            push("/auth/login");
        }
    }, []);
    return (
        <>
            <HeroSection />
            <MainSection />
        </>
    );
};

export default produk; 
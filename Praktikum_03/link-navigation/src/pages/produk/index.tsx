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
        <div>
            Produk User Page <br />
            {/* <button
                onClick={() => {
                    localStorage.removeItem("isLogin");
                    push("/auth/login");
                }}
            >
                Logout
            </button> */}
        </div>
    );
};

export default produk; 
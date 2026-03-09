import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/component/layouts/navbar";
import AppShell from "@/component/layouts/Appshell";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const isLogin = localStorage.getItem("isLogin");

  //   const publicPages = ["/auth/login", "/auth/register"];

  //   if (!isLogin && !publicPages.includes(router.pathname)) {
  //     router.push("/auth/login");
  //   } else {
  //     setLoading(false);
  //   }
  // }, [router.pathname]);

  // if (loading) return null;

  // const isAuthPage =
  //   router.pathname === "/auth/login" ||
  //   router.pathname === "/auth/register";

  return (
    <>
      {/* {isAuthPage ? (
        <Component {...pageProps} />
      ) : ( */}
        <AppShell>
          <Component {...pageProps} />
          {/* <button className="m-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            onClick={() => {
              localStorage.removeItem("isLogin");
              router.push("/auth/login");
            }}
          >
            Logout
          </button> */}
        </AppShell>
      {/* )} */}
    </>
  );
}
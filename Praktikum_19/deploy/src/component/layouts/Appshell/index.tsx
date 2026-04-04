import { useRouter } from "next/router";
import Navbar from "../navbar";
// import Footer from "../footer";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import Script from "next/script";
import style from "./AppShell.module.css";

const disableLayout = ['/auth/login', '/auth/register', '/404'];

type AppShellProps = {
    children: React.ReactNode;
}

const Footer = dynamic(() => import("../footer"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const AppShell = (props:AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <>  
        <Script 
            src="https://www.googletagmanager.com/gtag/js?id=G-1234567890" 
            strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-1234567890');
            `}
        </Script>

        <main className={`${inter.className} ${style.mainContainer}`} >
            {!disableLayout.includes(pathname) && <Navbar />}
            <div className={style.contentWrapper}>
                {children}
            </div>
            {!disableLayout.includes(pathname) && <Footer />}
        </main>
        </>
    )
}

export default AppShell;
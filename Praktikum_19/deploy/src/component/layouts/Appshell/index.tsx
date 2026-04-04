import { useRouter } from "next/router";
import Navbar from "../navbar";
import Footer from "../footer";
import { Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import style from "./AppShell.module.scss";

const disableLayout = ['/auth/login', '/auth/register', '/404'];

type AppShellProps = {
    children: React.ReactNode;
}

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname, asPath } = useRouter();    
    const isLayoutDisabled = disableLayout.includes(pathname);

    const generateBreadcrumbs = () => {
        const pathWithoutQuery = asPath.split('?')[0];
        const pathSegments = pathWithoutQuery.split('/').filter(v => v.length > 0);

        return (
            <nav className={style.breadcrumb} aria-label="breadcrumb">
                <ol>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {pathSegments.map((segment, index) => {
                        const href = "/" + pathSegments.slice(0, index + 1).join("/");
                        const isLast = index === pathSegments.length - 1;
                        const titleRaw = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
                        const title = (segment.length > 15 && !segment.includes('-')) ? "Detail" : titleRaw;

                        return (
                            <li key={href}>
                                <span className={style.breadcrumb__separator}>/</span>
                                {isLast ? (
                                    <span className={style.breadcrumb__current}>{title}</span>
                                ) : (
                                    <Link href={href}>{title}</Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        );
    };

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

            <main className={`${inter.className} ${style.mainContainer} ${isLayoutDisabled ? style.isAuthPage : ''}`}>
                {!isLayoutDisabled && <Navbar />}

                {isLayoutDisabled ? (
                    children
                ) : (
                    <div className={style.pageWrapper}>
                        <div className={style.contentCard}>
                            {generateBreadcrumbs()}
                            
                            <div className={style.childrenWrapper}>
                                {children}
                            </div>
                        </div>
                    </div>
                )}

                {!isLayoutDisabled && <Footer />}
            </main>
        </>
    )
}

export default AppShell;
import { useRouter } from "next/router";
import Navbar from "../navbar";

const disableNavbar = ['/auth/login', '/auth/register'];

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props:AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            <div className="footer text-center text-4xl font-bold ">
                <h1>Footer</h1>
            </div>
        </main>
    )
}

export default AppShell;
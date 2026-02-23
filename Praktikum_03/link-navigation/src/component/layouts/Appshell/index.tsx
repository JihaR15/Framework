import Navbar from "../navbar";

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props:AppShellProps) => {
    const { children } = props;
    return (
        <main>
            <Navbar />
            {children}
            <div className="footer">
                <h1>Footer</h1>
            </div>
        </main>
    )
}

export default AppShell;
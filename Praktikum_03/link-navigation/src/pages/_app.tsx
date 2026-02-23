import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/component/layouts/navbar";
import AppShell from "@/component/layouts/Appshell";

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  </div>
  );
}

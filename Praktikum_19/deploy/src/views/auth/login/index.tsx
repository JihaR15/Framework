import Link from "next/link";
import styles from "./login.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        if (res.error === "CredentialsSignin") {
          setError("Email atau Password salah");
        } else {
          setError(res.error);
        }
      }
    } catch (error) {
      setIsLoading(false);
      setError("Terjadi kesalahan pada sistem");
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Dynamic Island Notification */}
      <div className={`${styles.dynamicIsland} ${error ? styles.showIsland : ""}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>{error}</span>
      </div>

      <div className={styles.card}>
        {/* Kolom Kiri: Pattern & Text */}
        <div className={styles.leftPanel}>
          <div className={styles.leftPanel__content}>
            <h2>NextJs.</h2>
            <p>Selamat Datang di Web Hasil Pembelajaran Mata Kuliah Framework Semester 6 - 2026</p>
            <br />
            <h4>Jiha Ramdhan / 2341720043 / TI-3D</h4>
          </div>
        </div>

        {/* Kolom Kanan: Form Login */}
        <div className={styles.rightPanel}>
          <div className={styles.formContainer}>
            <div className={styles.header}>
              <div className={styles.logo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                MyApp
              </div>
              <h1 className={styles.title}>Selamat Datang</h1>
              <p className={styles.subtitle}>Silakan masuk ke akun Anda</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="admin@example.com"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              {/* <div className={styles.forgotPassword}>
                <Link href="#">Forgot password?</Link>
              </div> */}

              <button
                type="submit"
                className={styles.btnPrimary}
                disabled={isLoading}
              >
                {isLoading ? "Memproses..." : "Login"}
              </button>
            </form>

            <div className={styles.divider}>
              <span>Atau Login dengan</span>
            </div>

            <div className={styles.socialGroup}>
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl, redirect: false })}
                disabled={isLoading}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => signIn("github", { callbackUrl, redirect: false })}
                disabled={isLoading}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </button>
            </div>

            <p className={styles.footerText}>
              Tidak punya akun? <Link href="/auth/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tampilanlogin;
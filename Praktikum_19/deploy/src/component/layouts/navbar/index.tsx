import styles from "./navbar.module.scss"; 
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <nav className={styles.navbar} data-testid="navbar">
      {/* Kiri: Brand/Logo */}
      <div className={styles.navbar__brand}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span>MyApp</span>
      </div>

      {/* Kanan: Info User & Action */}
      <div className={styles.navbar__right}>
        {data ? (
          <div className={styles.navbar__user}>
            <span className={styles.navbar__user__greeting}>
              Welcome, <strong>{data.user?.fullName || "User"}</strong>
            </span>
            
            {data.user?.image ? (
              <Image
                src={data.user.image}
                alt={data.user.fullName || "User Avatar"}
                className={styles.navbar__user__image}
                width={40}
                height={40}
              />
            ) : (
              <div className={styles.navbar__user__avatarFallback}>
                {(data.user?.fullName || "U").charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        ) : null}

        {data ? (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
            onClick={() => signOut()}
          >
            {/* Ikon Sign Out (Log-out) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Sign Out
          </button>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn()}
          >
            {/* Ikon Sign In (Log-in) */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
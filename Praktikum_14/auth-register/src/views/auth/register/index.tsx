import Link from "next/link";
import styles from "./register.module.scss";

const TampilanRegister = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.register__title}>Halaman Register</h1>
      <div className={styles.register__form}>
        <form action="">
          {/* email */}
          <div className={styles.register__form__item}>
            <label
              htmlFor="email"
              className={styles.register__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.register__form__item__input}
            />
          </div>
          {/* full name */}
          <div className={styles.register__form__item}>
            <label
              htmlFor="FullName"
              className={styles.register__form__item__label}
            >
              Full Name
            </label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              placeholder="Full Name"
              className={styles.register__form__item__input}
            />
          </div>
          {/* password */}
          <div className={styles.register__form__item}>
            <label
              htmlFor="Password"
              className={styles.register__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Password"
              className={styles.register__form__item__input}
            />
          </div>
          <button type="submit" className={styles.register__form__item__button}>
            Register
          </button>
        </form>
        <br />
        <p className={styles.register__form__item__text}>
          Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;

import Link from "next/link";
import styles from "./register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError("");
    setIsLoading(true);
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const fullName = formData.get("FullName") as string;
    const password = formData.get("Password") as string;
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, fullName, password }),
    });

    if (response.status === 200) {
      form.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(
        response.status === 400 ? "Email already exists" : "An error occurred",
      );
    }
  };

  return (
    <div className={styles.register}>
      {error && <p className={styles.register__error}>{error}</p>}
      <h1 className={styles.register__title}>Halaman Register</h1>
      <div className={styles.register__form}>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className={styles.register__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
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

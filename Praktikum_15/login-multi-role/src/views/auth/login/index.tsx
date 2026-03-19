import Link from "next/link";
import styles from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    // const form = event.currentTarget;
    // const formData = new FormData(event.currentTarget);
    // const email = formData.get("email") as string;
    // // const fullName = formData.get("FullName") as string;
    // const password = formData.get("Password") as string;

    // // Validasi Email
    // if (!email || email.trim() === "") {
    //   setError("Email wajib diisi!");
    //   setIsLoading(false);
    //   return;
    // }

    // // Validasi Password
    // if (password.length < 6) {
    //   setError("Password minimal 6 karakter!");
    //   setIsLoading(false);
    //   return;
    // }

    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // });

    // if (response.status === 200) {
    //   form.reset();
    //   setIsLoading(false);
    //   push("/auth/login");
    // } else {
    //   setIsLoading(false);
    //   setError(
    //     response.status === 400 ? "Email already exists" : "An error occurred",
    //   );
    // }

    
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
        setError(res.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <div className={styles.login}>
      {error && <p className={styles.login__error}>{error}</p>}
      <h1 className={styles.login__title}>Halaman login</h1>
      <div className={styles.login__form}>
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className={styles.login__form__item}>
            <label htmlFor="email" className={styles.login__form__item__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.login__form__item__input}
              // required
            />
          </div>
          {/* full name */}
          {/* <div className={styles.login__form__item}>
            <label
              htmlFor="FullName"
              className={styles.login__form__item__label}
            >
              Full Name
            </label>
            <input
              type="text"
              id="FullName"
              name="FullName"
              placeholder="Full Name"
              className={styles.login__form__item__input}
              // required
            />
          </div> */}
          {/* password */}
          <div className={styles.login__form__item}>
            <label
              htmlFor="password"
              className={styles.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.login__form__item__input}
              // required
              // minLength={6}
            />
          </div>
          <button
            type="submit"
            className={styles.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "login"}
          </button>
        </form>
        <br />
        <p className={styles.login__form__item__text}>
          Belum punya akun? <Link href="/auth/register">Daftar di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default Tampilanlogin;

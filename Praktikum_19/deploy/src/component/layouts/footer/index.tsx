import styles from "./footer.module.scss";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-testid="footer">
      <div className={styles.footer__content}>
        <p className={styles.footer__text}>
          &copy; {currentYear} <strong>MyApp</strong>. Jiha Ramdhan / 2341720043 / TI-3D
        </p>
        <div className={styles.footer__right}>
          <span>Politeknik Negeri Malang</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
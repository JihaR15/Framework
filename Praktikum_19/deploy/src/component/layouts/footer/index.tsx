import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer} data-testid="footer">
            <div className="text-4xl font-bold">
                <h1>Footer</h1>
            </div>
        </div>
    );
};

export default Footer;
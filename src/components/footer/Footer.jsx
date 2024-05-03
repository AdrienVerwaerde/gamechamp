import Image from "next/image";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
        <Image className={styles.logo} src="/logo.png" width={80} height={16} />
        <div className={styles.text}>copyright © 2024</div>
        </div>
    )
}

export default Footer;
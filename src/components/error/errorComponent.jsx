import Image from "next/image";
import styles from "./error.module.css";

const ErrorComponent = () => {
    return (
        <div className={styles.error}>
            <Image className={styles.errorImg} src="/error.png" width={50} height={50} />
            <span>Error...</span>
        </div>
    )
}

export default ErrorComponent;
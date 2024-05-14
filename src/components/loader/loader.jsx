import Image from "next/image";
import styles from "./loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Image className={styles.loaderImg} src="/logo-alt.png" width={50} height={50} />
            <span>LOADING..</span>
        </div>
    )
}

export default Loader;
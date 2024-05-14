import Image from "next/image";
import styles from "./loader.module.css";



const Loader = () => {
    return (
        <div className={styles.loader}>
            <Image src="/public/logo-alt.png" width={50} height={50} />
        </div>
    )
}

export default Loader;
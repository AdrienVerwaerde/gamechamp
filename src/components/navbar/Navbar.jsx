
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "../../lib/auth";
import Image from "next/image";

const Navbar = async () => {

    const session = await auth();

    return (
        <div className={styles.navContainer}>
            <Link href="/" className={styles.logo}>
                <Image className={styles.logoAlt} alt="Alternative Gamechamp logo" src="/logo-alt.png" width={27} height={27}/>
                <Image className={styles.logoMain} alt="Gamechamp logo" src="/logo.png" width={150} height={30}/>
            </Link>
            <div>
                <Links session={session}/>
            </div>
        </div>

    )
}

export default Navbar;
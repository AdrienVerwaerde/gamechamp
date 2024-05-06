import Link from "next/link";
import styles from "./home.module.css"
import Image from "next/image";

const Home = () => {
  return (

    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Enhance Gaming Worldwide</h1>
        <p className={styles.desc}>Helping gaming organizations to develop ambitious projects since 2018. Join our quest for limitless and globally enhanced gaming now !</p>
        <div className={styles.buttons}>
          <Link href="/about">
            <button className={styles.button}>Learn More</button>
          </Link>
          <Link href="/contact">
          <button className={styles.buttonContact}>Contact</button>
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/home-img.jpg" alt="" fill className={styles.homeImg} />
      </div>
    </div>

  )
};

export default Home;

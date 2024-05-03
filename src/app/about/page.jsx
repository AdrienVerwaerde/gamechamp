import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
    title: "About Page",
    description: "About description",
};

const AboutPage = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.subtitle}>About Gamechamp</h2>
                    <h1 className={styles.title}>We build projects for gaming and esport</h1>
                    <p className={styles.description}>We specialize in crafting captivating gaming projects that push boundaries and inspire players worldwide. Our team of dedicated enthusiasts brings together expertise in gaming events, development, and storytelling to create immersive experiences that redefine the gaming landscape. Join us on an adventure where creativity knows no bounds and every project pushes gaming further.<br/><br/>
                    Whether you're pondering the next esport circuit or envisioning an immersive single-player adventure, we've got you covered. Our team is dedicated to guiding you through every step of the journey, from concept to launch. Dare to dream big and let Gamechamp make it happen.</p>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <h1>100+</h1>
                            <p>Collaborators</p>
                        </div>
                        <div className={styles.box}>
                            <h1>50+</h1>
                            <p>Projects Worldwide</p>
                        </div>
                        <div className={styles.box}>
                            <h1>5K+</h1>
                            <p>People Involved</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                    src="/about.jpg"
                    alt="About image"
                    fill
                    className={styles.img}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;
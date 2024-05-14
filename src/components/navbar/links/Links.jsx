"use client";

import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "../../../lib/action";


const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Projects",
        path: "/blog",
    },

];

const Links = ({ session }) => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };


    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} toggleMenu={toggleMenu} />
                )))}
                {
                    session?.user ? (
                        <>
                            {
                                session.user.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} toggleMenu={toggleMenu} />
                            }
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} toggleMenu={toggleMenu}/>
                    )}
            </div>
            <div className={styles.menuButtonContainer}>
                <button onClick={toggleMenu} className={styles.menuButton}>
                    <Image className={styles.menuButton} src={open ? "/close.png" : "/menu.png"} alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
                </button>
            </div>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} toggleMenu={toggleMenu} />
                    ))}
                    {session?.user ? (
                        <>
                            {session.user.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} toggleMenu={toggleMenu} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Links;
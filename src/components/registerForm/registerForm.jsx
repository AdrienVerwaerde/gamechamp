"use client"

import { useRouter } from "next/navigation";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";
import { register } from "../../lib/action";

export const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push('/')
    }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="text" name="img" placeholder="Avatar URL (optional)" />
            <input type="password" placeholder="Password" name="password" />
            <input type="password" placeholder="Confirm Password" name="passwordRepeat" />
            <button>Register</button>
            {state?.error}
            <Link href="/login">Have an account ? <b>Login</b></Link>
        </form>
    )
}
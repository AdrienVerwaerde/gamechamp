
import Image from "next/image";
import { LoginForm } from "../../../components/loginForm/loginForm";
import { handleGithubLogin, handleGoogleLogin, login } from "../../../lib/action";
import styles from "./login.module.css";



const LoginPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}><Image className={styles.logo} alt="Github logo" src="/github.png" width={20} height={20} />Login with GitHub</button>
                </form>
                <form action={handleGoogleLogin}>
                    <button className={styles.google}><Image className={styles.logo} alt="Google logo" src="/google.png" width={20} height={20} />Login with Google</button>
                </form>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;
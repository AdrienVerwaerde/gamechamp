
import { LoginForm } from "../../../components/loginForm/loginForm";
import { handleGithubLogin, handleGoogleLogin, login } from "../../../lib/action";
import styles from "./login.module.css";



const LoginPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={styles.github}><img className={styles.logo} src="/github.png" />Login with GitHub</button>
                </form>
                <form action={handleGoogleLogin}>
                    <button className={styles.google}><img className={styles.logo} src="/google.png" />Login with Google</button>
                </form>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;
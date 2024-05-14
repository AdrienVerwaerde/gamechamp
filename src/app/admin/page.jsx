import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "../../components/adminPosts/adminPosts";
import AdminPostForm from "../../components/adminPostForm/adminPostForm";
import AdminUsers from "../../components/adminUsers/adminUsers";
import AdminUserForm from "../../components/adminUserForm/adminUserForm";
import { auth } from "../../lib/auth";
import Loader from "../../components/loader/loader";

const AdminPage = async () => {

    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<Loader />}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostForm userId={session.user.id} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<Loader />}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserForm />
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
import styles from 'src/app/components/components.module.css'
const LoginForm = ({loginUser}) => {
    return (
        <div className={styles.container}>
            <form className={styles.Form} onSubmit={(e) => loginUser(e)}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>

                <button className={styles.Button} type="submit">Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;
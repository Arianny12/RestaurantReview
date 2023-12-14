import styles from "./components.module.css";
// import '../globals.css';

const CreateUserForm = ({createUser}) => {
    return (
        <div>
            <form className={styles.Form} onSubmit={(e) => createUser(e)}>

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" />

                <label htmlFor="food">Favotire Food</label>
                <input type="text" id="food" name="food" />

                <button className={styles.Button} type= "submit">Join Foodies</button>
            </form>
        </div>
    );
};

export default CreateUserForm;
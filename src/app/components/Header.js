import Link from "next/link";
import styles from "./components.module.css"

const Header = ({isLoggedIn, logoutUser}) => {
    return (
        <header className={styles.Header}>
            <nav className={styles.HeaderNav}>
                {isLoggedIn && (
                    <>
                    <Link href="/">
                        <div className={styles.logo}>
                            <img src="https://cdn-icons-png.flaticon.com/512/6413/6413359.png"/>
                        </div>
                    </Link>
                        <Link href="/">Home</Link>
                        {/* <Link href="/createPost">Create</Link> */}
                        <Link href="/profile">Profile</Link>
                        <a onClick={logoutUser}>Sign Out</a>
                       
                    </>
                )}
        
            </nav>
        </header>
    );
}

export default Header;
import styles from 'src/app/components/components.module.css'

const UserProfileCard = ({user}) => {
    return (
        <div className={styles.userProfile}>
            <p className={styles.label}>Name: {user?.name}</p>
            {/* <p>Email: {user?.email}</p> */}
            <p className={styles.label}>Favorite Food: {user?.food}</p>
        </div>
    );
};

export default UserProfileCard;
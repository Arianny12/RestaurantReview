import { useState } from "react";
import styles from "./components.module.css";
// import '../globals.css';

const CreatePostForm = ({createPostFunction}) => {
    const [imageUpload, setImageUpload] = useState();
    return (
        <div className={styles.userProfile}>
            <form className={styles.Form} 
                onSubmit={(e) => createPostFunction(e, imageUpload)}>
                
                <label htmlFor="image">Image</label>
                <input
                type="file"
                id="image"
                name="image"
                placeholder="Choose Image"
                accept="image/png,image/jpeg,"
                onChange={(e)=>{
                    setImageUpload(e.target.files[0]);
                }}
                />
                <p></p>
                <label htmlFor="postContent">Write a caption...</label>
                <input type="text" id="postContent" name="postContent" />
                <button className={styles.Button} type= "submit">Share</button>
            </form>
        </div>
    );
};

export default CreatePostForm;
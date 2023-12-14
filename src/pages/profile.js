import styles from "@/app/components/components.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { query, collection, getFirestore, where, getDocs, } from "firebase/firestore";
import UserProfileCard from "@/app/components/UserProfileCard";
import PostCard from "@/app/components/PostCard";
import "../app/globals.css";


export default function UserProfile({isLoggedIn, userInformation}) {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => { 
  if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);

  useEffect(() => {
    async function getUser() {
        let user = {};
        const db = getFirestore();
        const q = query(
            collection(db, "users"),
            where("userId", "==", userInformation?.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            user = doc.data();
        });
        setUser(user);
    }


  async function getUserPosts(){
    let posts = [];
    const db = getFirestore();
    const q = query(
        collection(db, "posts"),
        where("userId", "==", userInformation?.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((post)=>{
        posts.push(post.data());
    });
    setPosts(posts);
  }
  if (userInformation){
    getUser();
    getUserPosts();
  }
}, [userInformation]);
console.log(user)
    return(
        <>
        <main>
        <h1>My Foodies Profile 
            <a href="/createPost" >
                <div className={styles.logo}>
                    <img src="https://cdn0.iconfinder.com/data/icons/instagram-ui-1/24/Instagram-UI_post-512.png"/>
                </div>
            </a>

        </h1>  
        <UserProfileCard user={user} userInformation={userInformation}/>
        <Link href="/createPost">Review a new Restaurant</Link>
        {posts.map((post, i) => (
            <PostCard key={i} post={post}/>
        ))}
        </main>
        </>
    );
}
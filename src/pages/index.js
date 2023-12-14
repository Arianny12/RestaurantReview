import { useEffect, useState} from "react";
import { useRouter} from "next/router";
import {getDocs, getFirestore,collection } from "firebase/firestore";
import PostCard from "../app/components/PostCard";
import "../app/globals.css";


export default function DashBoard({isLoggedIn}) {
    const router = useRouter ();
    const [allPosts, setAllPosts] = useState([]);
    useEffect (() => {
        if (!isLoggedIn) router.push("/login");
    }, [isLoggedIn]);

    useEffect(()=> { 
        async function getAllPosts(){
            const postsArray = [];
            const db = getFirestore();
            const postsQuery = await getDocs(collection(db, "posts"));

            postsQuery.forEach((post) =>{
                postsArray.push({id: post.id, ...post.data() });
            });
            setAllPosts(postsArray);
        }
        getAllPosts();
    }, []);
    

    return(
        <main>
        <h1>Restaurants Near You</h1> 
        {allPosts.map((post, i) => (
            <PostCard post={post} key={i}/>  
        ))} 
        </main>
    );
}
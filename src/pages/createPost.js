import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import CreatePostForm from "@/app/components/CreatePostForm";
import { getFirestore, getDocs, query, where, collection, addDoc } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import "../app/globals.css";

export default function CreatePost({isLoggedIn, userInformation}) {
    const router = useRouter ();
    const [user,setUser] = useState({});
    useEffect(() => {
      if (!isLoggedIn) router.push("/"); 
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
      getUser();
    },[userInformation]);

    const createPostFunction = useCallback(
        async (e, imageUpload) => {
        e.preventDefault();
        const storage = getStorage();
        const db = getFirestore();
        const postContent = e.currentTarget.postContent.value;
        let imageURL;
        const storageRef = ref(storage, imageUpload?.name);
        if(imageUpload){
          await uploadBytes(storageRef, imageUpload)
            .then(async (snapshot) => {
              await getDownloadURL(snapshot.ref).then((url) => {
                  imageURL = url;
                });
            })
            .catch((error) => {
              console.warn(error);
            });
          }

        const userId = userInformation.uid;
        const data = await addDoc(collection(db, "posts"), {
            postContent: postContent,
            userId: userId,
            name: user?.name,
            imageURL: imageURL || '',
        });
        if(data) {
            router.push("/");
        }
    }, 
    [addDoc, collection, user, getFirestore, router, userInformation]
    );

    return (
          <main>
            <h1>Create Post</h1>
            <CreatePostForm createPostFunction={createPostFunction} />
          </main>
    );
}
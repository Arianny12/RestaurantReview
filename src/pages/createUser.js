import { useEffect} from "react";
import { useRouter} from "next/router";
import Link from "next/link";
import CreateUserForm from "@/app/components/CreateUserForm";
import "../app/globals.css";


export default function CreateUser({createUser, isLoggedIn}) {
    const router = useRouter();
    useEffect (() =>{
        if (isLoggedIn) router.push("/");
    }, [isLoggedIn])
    return(

        <main>
        <h1>Create a new account</h1> 
        <CreateUserForm createUser={createUser}/>
        <p>or</p> 
        <p>Back to ++<Link href="/login"> login</Link>++</p>        
        </main>
    );
}
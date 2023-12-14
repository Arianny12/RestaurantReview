import { useEffect} from "react";
import { useRouter} from "next/router";
import Link from "next/link";
import LoginForm from "@/app/components/LoginForm";
import "../app/globals.css";

export default function Login({isLoggedIn, loginUser}) {
    const router = useRouter();
    useEffect (() =>{
        if (isLoggedIn) router.push("/");

    }, [isLoggedIn]);

    return(
        <main>
            <h1>Login to Foodies</h1>
            <LoginForm loginUser={loginUser}/> 
            <p>or</p> 
            <p>Don't have an account? ++<Link href="/createUser"> Sign Up</Link>++</p>
            
        </main>
    );
}
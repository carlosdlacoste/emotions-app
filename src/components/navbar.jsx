"use client"
import { useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = ({storedToken, handleToken}) => {
    const router = useRouter()

    useEffect(() => {
        const currentToken = sessionStorage.getItem('MiToken')
            handleToken(currentToken)
    }, [storedToken]);

    const deleteTokenSessionStorage = (token) => {
        sessionStorage.removeItem('MiToken', token);
    };

    async function handleLogOut (event) {
        event.preventDefault()
        const resp = await fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + storedToken
            },
        })
        const data = await resp.json()
        if(data){

            console.log(data)
            deleteTokenSessionStorage(storedToken)
            handleToken(null)
            router.push('/')
        }
    }

    return(
        <>
            <div className="navbar bg-amber-400">
                <div className="navbar-start">
                    <Link href="/" className="rotate-12">
                        <span className="p-2 ml-2 text-xl shadow-xl bg-red-600 rounded-full">Emotions Test</span>
                    </Link>
                </div>
                <div className="navbar-end gap-x-3">
                {
                    !storedToken ?
                    <>
                            <Link href="/login">
                                <button className="btn bg-emerald-500">Log In</button>
                            </Link>
                            <Link href="/signup">
                                <button className="btn border-emerald-500">Sign Up</button>
                            </Link>
                    </>
                    :
                    <>
                        <button className="btn bg-red-600" onClick={(event) => handleLogOut(event)}>Log Out</button>
                    </>
                }
                </div>
            </div>
        </>
    )
}

export default NavBar;
"use client"
import { useEffect, useContext} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/appContext";

const NavBar = () => {
    const router = useRouter()
    const { token, updateToken } = useContext(AuthContext);

    useEffect(() => {
        const currentToken = sessionStorage.getItem('MiToken')
            updateToken(currentToken)
    }, [token]);

    const deleteTokenSessionStorage = (token) => {
        sessionStorage.removeItem('MiToken', token);
    };

    async function handleLogOut (event) {
        event.preventDefault()
        deleteTokenSessionStorage(token)
        updateToken(null)
        router.push('/')
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
                    !token ?
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
"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () =>{
    const [user, setUser] = useState({});
    const router = useRouter()

    async function handleAddUser(event, newUser) {
        event.preventDefault()
        const resp = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
        const data = await resp.json()
        console.log(data)
        if(data){
            router.push("/login")
        }
    }
    return(
        <>
            <div className="h-screen flex justify-center items-center">
                <form className="bg-emerald-400 p-10 lg:w-1/2 md:w-1/2">
                    <h3 className="flex justify-center text-2xl text-black font-bold hover:text-amber-300 border-2 border-amber-500 p-2 mt-1 mb-4">Registrate Ahora!</h3>
                    <label htmlFor="name" className="font-bold text-sm text-black ml-1">Ingrese su nombre completo</label>
                    <input type="text" id="name" placeholder="Full Name" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black bg-white rounded-lg" onChange={(event) =>setUser({...user, fullName:event.target.value})} value={user.fullName || ''} autoComplete="off"/>
                    <label htmlFor="email" className="font-bold text-sm text-black ml-1">Ingrese su email</label>
                    <input type="text" id="email" placeholder="Email" className="border border-gray-400 p-2 mt-1 mb-4 w-full text-black bg-white rounded-lg" onChange={(event) =>setUser({...user, email: event.target.value})} value={user.email || ''} autoComplete="off"/>
                    <label htmlFor="password" className="font-bold text-sm text-black ml-1">Ingrese su contraseña</label>
                    <input type="password" id="password" placeholder="Password" className="border border-gray-400 p-2 mb-4 mt-1 w-full text-black bg-white rounded-lg" onChange={(event) => setUser({...user, password: event.target.value})} value={user.password || ''} autoComplete="off"></input>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex mx-auto" onClick={(event) => handleAddUser(event, user)}>Crear Usuario</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;
"use client"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

import Style from "./login.module.scss"
import Error from "@/app/ui/components/error"
export default function Login() {
    const {status} = useSession()
    const router = useRouter()
    if(status === 'authenticated') router.push("/dashboard")

    const [errores, setErrores] = useState([])


    function checkForm(e) {
        const checkFormErrors = []
        const email = e.target.email.value
        const password = e.target.password.value

        if(email === "") checkFormErrors.push("Email field is empty")
        if(password === "") checkFormErrors.push("password field is empty")
        
        setErrores(checkFormErrors)
        return
    }

    async function handleSubmit(e) {
        e.preventDefault()
        checkForm(e)
        if (errores.length == 0) {
            const nextAuthResponse = await signIn("credentials", {
                email: e.target.email.value,
                password: e.target.password.value,
                redirect: false
            })

            if (nextAuthResponse?.error) {
                setErrores(nextAuthResponse?.error.split(","))
                return
            }
            router.push("/dashboard")

        }
    }

    return (

        <main className={Style.main}>
            <div className={Style.title}>
                <h2>Login</h2>
            </div>
            {errores.length > 0 && errores.map(err => <Error>{err}</Error>)}
            <form onSubmit={handleSubmit} className={Style.form}>

                <label htmlFor="email">Email:</label>
                <input name="email" id="email" type="email" placeholder="example@example" />

                <label htmlFor="password">Password:</label>
                <input name="password" id="password" type="password" />

                <button type="submit">Enviar</button>
            </form>
        </main>


    )
}


"use client"

import Head from "next/head"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

// export const metadata = {
//     title: "Guri - Registration",
//     description: "Guri - Ecommerce, Account Registration"
// }

export default function Registration() {

    const {status} = useSession()
    const router = useRouter()
    if(status === 'authenticated')  router.push("/dashboard")

    return (
        <>

        </>
    )
}

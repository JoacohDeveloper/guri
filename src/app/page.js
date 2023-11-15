"use client"

import { signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
export default function Home() {
  const router = useRouter()
  async function handleSignIn() {
      const responseNextAuth = await signIn("credentials", 
        {
          username: "juan",
          email: "juan@eees",
          password: "asas",
          redirect: false
        }
      )

      if(responseNextAuth?.error) {
        console.log(responseNextAuth.error)
        return
      }

      router.push("/dashboard")

  }
  
  return (
    <div>
      <p>/</p>
      <button onClick={handleSignIn}>Login</button>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  )
}

"use client"

import { useSession } from "next-auth/react"
export default function Dashboard() {
    const {data, status} = useSession()

    console.log(data)
    console.log("hola mundo")
  return (
    <p>Dashboard</p>
  )
}

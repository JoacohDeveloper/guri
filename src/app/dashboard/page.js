"use client"

import { useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/navigation"
export default function Dashboard() {
  const { data, status } = useSession()
  console.log(data)
  return (
    <>
      <Head>
          <title>Guri - Dashboard</title>
      </Head>
      <p>Dashboard</p>
    </>
  )
}

"use client"

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
    const router = useRouter()
    useEffect(async () => {
        const nextAuthResponse = await signOut({
            redirect: true
        })
    }, [])
    return (
        <></>
    )
}

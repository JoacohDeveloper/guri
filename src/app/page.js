"use client"
import Link from 'next/link'
import React from 'react'
import Style from "./globals.scss"
import Button from './ui/components/button'

export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className='title'>  
          <h2>
            We have the Product which you are Searching for.
          </h2>
          <Button><Link href={"/shop/offers"}>Offers</Link></Button>
        </div>
      </section>

    </main>
  )
}

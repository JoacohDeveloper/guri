"use client"

import Style from "./navbar.module.scss"
import Image from "next/image"
import Logo from "../img/guriShop.png"
import Link from "next/link"

import UserIcon from "../img/bx-user.svg"
import Cart from "../img/bx-shopping-bag.svg"
import Fav from "../img/bx-bookmark-heart.svg"
import Bell from "../img/bx-bell.svg"
import { useSession } from "next-auth/react"


export default function Navbar() {
  const WIDTH = 24
  const HEIGHT = 24

  const {status} = useSession();

  return (
    <header className={Style.header}>
      <div className={Style.headerContiner}>
        <div className="Logo">
          <Link href={"/"} className={Style.link}><Image src={Logo.src} alt="Guri-Shop Logo" width={62} height={62} /></Link>
        </div>

        <nav className={Style.navlist}>
          <ul >
            <li>
              <Link href={"/account/notifications"}>
                <Image src={Bell.src} width={WIDTH} height={HEIGHT} />
              </Link>
            </li>
            <li>
              <Link href={"/shop/favorites"}>
                <Image src={Fav.src} width={WIDTH} height={HEIGHT} />
              </Link>
            </li>
            <li>

              <Link href={"/shop/cart"}>
                <Image src={Cart.src} width={WIDTH} height={HEIGHT} />
              </Link>
            </li>
            
            <li className={Style.accountNav}>
              <Image src={UserIcon.src} width={WIDTH} height={HEIGHT} />
              <ul className={Style[status]}>
                <li>
                  <Link href={"/account/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/account/registration"}>Register</Link>
                </li>
              </ul>
              <ul className={status === "authenticated" ? Style.sessionNav : Style.authenticated}>
                <li>
                  <Link href={"/account"}>My Account</Link>
                </li>
                <li>
                  <Link href={"/account/config"}>Config</Link>
                </li>
                <li>
                  <Link href={"/account/logout"}>Logout</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  )
}

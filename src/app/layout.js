import { Inter } from 'next/font/google'
import './globals.scss'
import SessionAuthProvider from './context/SessionAuthProvider'
import Navbar from './ui/components/navbar.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guri - Home',
  description: 'Ecommerce, tienda virtual, productos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionAuthProvider>
        <Navbar />
        <div className='container'>
            {children}
        </div>
        </SessionAuthProvider>
      </body>
    </html>
  )
}

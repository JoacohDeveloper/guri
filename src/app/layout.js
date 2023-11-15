import { Inter } from 'next/font/google'
import './globals.scss'
import SessionAuthProvider from './context/SessionAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Guri - Home',
  description: 'Ecommerce, tienda virtual, productos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='container'>
            <SessionAuthProvider>
            {children}
            </SessionAuthProvider>
        </main>
      </body>
    </html>
  )
}

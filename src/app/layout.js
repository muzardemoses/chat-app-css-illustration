import './globals.css'
// import { Inter } from 'next/font/google'
import { Rubik } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat app CSS illustration',
  description: 'A CSS illustration of a chat app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}

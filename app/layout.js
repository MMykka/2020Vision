import { Footer, Nav } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import CardProvider from '@/context/CardContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '2020Vision',
  description: 'The highest standard of eye care.We believe that the quality of "seeing" leads to quality of life',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
      <CardProvider>
      <Nav />
      {children}
      <Footer/>
      </CardProvider>
      </body>
    </html>
  )
}

import Navbar from 'app/(shared)/Navbar';
import Footer from 'app/(shared)/Footer';
import './globals.css'
import { Open_Sans } from 'next/font/google';


const openSans = Open_Sans({
  subsets : ["latin"]
})

export const metadata = {
  title: 'Blog AI App ',
  description: 'Nextjs Blog AI App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body >
      <Navbar />
        {children}
      <Footer/>
        </body>
    </html>
  )
}

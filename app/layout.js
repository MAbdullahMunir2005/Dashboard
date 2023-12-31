import './globals.css'

import Navbar from '@/Components/Navbar'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex gap-5'>
        <Navbar  className='min-h-fit'/>
        {children}
        </body>
    </html>
  )
}

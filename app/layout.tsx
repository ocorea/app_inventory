import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageHeader from './componentes/header'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema Gestión de Inventario',
  description: 'Truess Sistema Gestión de Inventario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
   
      <body className={inter.className}>
      <div style={{display:'flex', flexDirection:'column'}}>
        <PageHeader/>
    
        <ToastContainer/>
      {children}
     
      
      </div>
        </body>



  


    

    </html>
  )
}

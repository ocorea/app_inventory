import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PathGuard from './lib/pathguard/pathGuard'

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
        <h1>Prueba encabezado</h1>
    
 
      <div style={{display:'flex', flexDirection:'column'}}>     
        <ToastContainer/>

 <PathGuard>
 {children}
 </PathGuard>

  
      
      </div>
  
        </body>
    
     



  


    

    </html>
  )
}

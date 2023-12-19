import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import PageHeader from '../componentes/header'

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
         <div style={{display:'flex', flexDirection:'column'}}>
        <PageHeader/>    
          {children}    
      
      </div>
  )
}

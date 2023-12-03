"use client"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { DataStore } from './lib/dataservice/dataStore';

export default function Home() {
  const dataStore = new DataStore();
  const [sucursalNombre, setSucursalNombre] = useState('')
 
  useEffect(() => {
    setSucursalNombre(dataStore.get('sucursal_nombre') as string)
  }, [])
  
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
<h2>Gestion de inventario</h2>
<h3>{'Sucursal: ' + sucursalNombre }</h3>
    </main>
  )
}

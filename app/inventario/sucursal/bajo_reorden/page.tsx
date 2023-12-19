"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { DataStore } from "@/app/lib/dataservice/dataStore";
import { ApiService } from "@/app/lib/dataservice/APIService";
import TruessDatatable from "@/app/componentes/datatable/datatable";
import ModalProductoSucursal from "@/app/componentes/inventarios/modal_producto_sucursal";

export default function ProductosBajoReorden(){

    const dataStore = new DataStore();
    const apiService = new ApiService();
    const [sucursalId, setSucursalId] = useState<any>(null)
    const [sucursalStat, setSucursalStat] = useState<any>(null)
    const [sucursalNombre, setSucursalNombre] = useState('')
    const [productoCodigo, setProductoCodigo] = useState('')

    const [listaProductos, setListaProductos] = useState([])
    const [showModal, setShowModal] = useState(false);

    //definicion de columnas

    const productosColumnas = [{ header: 'Código', field: 'producto_id' },
{ header: 'Nombre', field: 'producto_nombre' },
{ header: 'Inventario actual', field: 'inventario_existencia' },
{ header: 'Existencia minima', field: 'inventario_existencia_minima' },
{ header: 'Existencia maxima', field: 'inventario_existencia_maxima' },

];
    
const sucursalBotones=[{
    texto:'Seleccionar',
    accion:'seleccionar',
    color:'primary'
  }];



  const seleccionar=(accion:string,row:any)=>{

    //mostrar los datos modal
        setProductoCodigo(row.producto_id);
        setShowModal(true);  
     }
    
    
    const sucursal_stat =(sucursal_id:number)=>{
        apiService.CallAPI("GET","/api/inventory/stat_inventario_sucursal?sucursal=" + sucursal_id.toString(),{}).then((res:any)=>{
            if(res.status === 200){
                setSucursalStat(res.response.data);
            }
        })

    }

    const obtener_productos_bajo_reorden =(sucursal_id:number)=>{
        console.log('SUCURSAL ID:',sucursal_id)
        apiService.CallAPI("GET","/api/inventory/lista_productos_sin_punto_reorden?sucursal=" + (sucursalId || sucursal_id).toString(),{}).then((res:any)=>{
            if(res.status === 200){
                console.log(res.response.data)
               setListaProductos(res.response.data);
               sucursal_stat(sucursal_id);
            }
        })
      
    } 

    useEffect(() => {
        setSucursalId(dataStore.get('sucursal_id') as number)
        setSucursalNombre(dataStore.get('sucursal_nombre') as string)
        //obtener_productos_bajo_reorden();
        obtener_productos_bajo_reorden(dataStore.get('sucursal_id') as number);
    }, [])


    return (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1>Listado de productos bajo punto de reoden sucursal : {sucursalNombre} </h1>
           
           <div className="stats shadow" style={{marginBottom:'20px', }}>
           <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Productos asociados</div>
    <div className="stat-value">{sucursalStat?.cantidad_productos}</div>

  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">Productos sin punto de reoden</div>
    <div className="stat-value">{sucursalStat?.productos_sin_reorden}</div>
  { sucursalStat ?
   <div className="stat-desc">{Math.round(((sucursalStat?.productos_sin_reorden / sucursalStat.cantidad_productos) * 100)) } %)</div>
   
  : <></>}

    
    
      </div>
  
           </div>
           
           <div>
           <TruessDatatable columnas={productosColumnas}
   registros = {listaProductos}
   botones={sucursalBotones}
   func_botones={seleccionar}
   />
   { (productoCodigo && sucursalId ) ?  <ModalProductoSucursal
            producto_codigo={productoCodigo}
             sucursal_id={sucursalId}
             show_modal_value={showModal}
            show_modal_fnc={()=>{setShowModal(false);
            obtener_productos_bajo_reorden(sucursalId);
            }} ></ModalProductoSucursal> :<></> }
           </div>

            </main>
    )
}
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
    console.log(row)
    console.log(row.producto_codigo)
setProductoCodigo(row.producto_id);
setShowModal(true);


   
    
    }
    

    const obtener_productos_bajo_reorden =(sucursal_id:number)=>{
        apiService.CallAPI("GET","/api/inventory/lista_productos_sin_punto_reorden?sucursal=" + (sucursalId || sucursal_id).toString(),{}).then((res:any)=>{
            if(res.status === 200){
                console.log(res)
                setListaProductos(res.response.data);
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
            <h2>Listado de productos bajo punto de reoden sucursal : {sucursalNombre} </h2>
            <TruessDatatable columnas={productosColumnas}
   registros = {listaProductos}
   botones={sucursalBotones}
   func_botones={seleccionar}
   />
   { (productoCodigo && sucursalId ) ?  <ModalProductoSucursal
            producto_codigo={productoCodigo}
             sucursal_id={sucursalId}
             show_modal_value={showModal}
            show_modal_fnc={setShowModal} ></ModalProductoSucursal> :<></> }
            </main>
    )
}
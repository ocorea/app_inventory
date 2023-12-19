"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { DataStore } from "@/app/lib/dataservice/dataStore";
import TruessDatatable from "@/app/componentes/datatable/datatable";
import ModalPickingDetalle from "@/app/componentes/inventarios/modal_picking_detalle";
import { useRouter, usePathname } from 'next/navigation'



export default function PickingPendienteAtender(){
    const [listaPicking, setListaPicking] = useState<any>([]);
    const [showModal, setShowModal] = useState(false);

    const [pickingId, setPickingId] = useState<string>('');
    

    const apiService = new ApiService();
    const dialogoService = new Dialogo();
    const dataStore = new DataStore();
    const router = useRouter();

    const columnas=[{header:'Picking',field:'picking_id'},
    {header:'Fecha',field:'picking_fecha'},
    {header:'Dias de antiguedad',field:'dias_antiguedad'},
    {header:'Sucursal',field:'sucursal_nombre'},
{header:'Cantidad de productos',field:'cantidad_productos'}]

const pickingBotones = [{
    texto: 'Atender',
    accion: 'atender',
    color: 'primary'
},
{
    texto: 'Ver detalle',
    accion: 'detalle',
    color: 'sucess'
}
]

const seleccionar = (accion: string, row: any) => {
    if (accion === 'atender') {
        router.push(`/inventario/bodega/atender_orden?picking_id=${row.picking_id}`);
    }
    if (accion === 'detalle') {
        setPickingId(row.picking_id);
      setShowModal(true);
    }   

}

const obtener_lista_picking=()=>{
    apiService.CallAPI("GET","/api/inventory/lista_ordenes_picking_pendientes",{}).then((res:any)=>{
        if(res.status === 200){
            setListaPicking(res.response.data);
        }
    })
}

useEffect(() => {
    obtener_lista_picking();
}, [showModal])


return (
    <>
    <h2>Ordenes de Picking pendiente de atención</h2>
    <div>
        <button type='button' className="btn btn-primary" onClick={()=>{obtener_lista_picking()}}>Actualizar</button>
        <TruessDatatable
            columnas={columnas}
            registros={listaPicking}
            botones={pickingBotones}
            func_botones={seleccionar}     
        />
    </div>
    {pickingId ?
     <>
          <ModalPickingDetalle picking_id={pickingId} 
     show_modal_fnc={setShowModal} show_modal_value={showModal}/>


     </>



    :<></>}

    </>
)

}
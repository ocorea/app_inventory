"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { ApiService } from "@/app/lib/dataservice/APIService";
import { DataStore } from "@/app/lib/dataservice/dataStore";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import TruessDatatable from "@/app/componentes/datatable/datatable";
import ModalPickingDetalle from "@/app/componentes/inventarios/modal_picking_detalle";
import { useRouter, usePathname } from 'next/navigation'
import Sucursales from '../../config/sucursales/page';


export default function PickingPendienteRecibir(){

const apiService = new ApiService();
const dialogos = new Dialogo();
const dataService = new DataStore();
const router = useRouter();

const [listaPicking, setListaPicking] = useState<any>([]);
const [pickingId, setPickingId] = useState<string>('');
const [showModal, setShowModal] = useState(false);
const [SucursalId, setSucursalId] = useState<any>(null);



const pickingBotones = [{
    texto: 'Recibir',
    accion: 'recibir',
    color: 'primary'
},
{
    texto: 'Ver detalle',
    accion: 'detalle',
    color: 'sucess'
}
]

const columnasPicking=[ 
    {header:'Número de Orden',field:'numero_orden',type:'text'},
    {header:'Fecha de Picking',field:'fecha',type:'text'},
    {header:'Estado',field:'estado',type:'text'},
    {header:'Usuario Solicitó',field:'usuario_solicita',type:'text'},
{header:'Usuario Envió',field:'usuario_envia',type:'text'}]

useEffect(() => {
    setSucursalId(dataService.get("sucursal_id"));
    obtener_lista_picking(dataService.get("sucursal_id") as number)

}, [showModal])


const seleccionar = (accion: string, row: any) => {
    if (accion === 'recibir') {
        router.push(`/inventario/sucursal/recibir_picking?picking_id=${row.numero_orden}`);
    }
    if (accion === 'detalle') {
        setPickingId(row.numero_orden);
         setShowModal(true);
    }  

}

const obtener_lista_picking=(sucursal_id:number)=>{
    apiService.CallAPI("GET",`/api/inventory/lista_ordenes_picking_estado_sucursal?estado=2&sucursal=${sucursal_id}`,{}).then((res:any)=>{
        if(res.status === 200){
            setListaPicking(res.response.data);
        }
    })
}

return (
    <div>
        <h1>Picking pendiente de recibir</h1>
        <button type='button' className="btn btn-primary" onClick={()=>{obtener_lista_picking(SucursalId)}}>Actualizar</button>
    
        <TruessDatatable
        columnas={columnasPicking}
        registros={listaPicking}
        botones={pickingBotones}
        func_botones={seleccionar}
        ></TruessDatatable>

        {pickingId ?
     <>
          <ModalPickingDetalle picking_id={pickingId} 
     show_modal_fnc={setShowModal} show_modal_value={showModal}/>


     </>



    :<></>}
    </div>
    
)

}
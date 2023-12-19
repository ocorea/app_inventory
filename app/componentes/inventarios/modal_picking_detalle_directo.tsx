"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { ApiService } from "@/app/lib/dataservice/APIService";
import { DataStore } from "@/app/lib/dataservice/dataStore";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import TruessDatatable from "../datatable/datatable";
import Modal from 'react-modal';


export interface PickingDetalleProps{
    picking_id:string,
    show_modal_fnc:any,
    show_modal_value:boolean
}

export default function ModalPickingDetalleDirecto( {picking_id,show_modal_fnc,show_modal_value}:PickingDetalleProps){

    const [picking_profile, setPicking_profile] = useState<any>([]);
    const [tracking, setTracking] = useState<any>([]);

    const apiService = new ApiService();
    const dialogos = new Dialogo();
    const dataStore = new DataStore();



    const columnas=[
        {header:'Producto Código',field:'codigo_producto'},
        {header:'Producto',field:'nombre_producto'},
    {header:'Cantidad requerida',field:'cantidad_solicitada'}   
];

const tracking_columnas=[
    {header:'Fecha',field:'tracking_fecha'},
    {header:'Estado',field:'estado'},
{header:'Usuario',field:'tracking_usuario'}]


const cancelar_orden=()=>{

    dialogos.show_confirm("Cancelar orden de picking",
    "Está seguro de cancelar esta orden de picking",
    ()=>{

       
        apiService.CallAPI("POST",`/api/inventory/cancelar_picking?picking_numero=${picking_id}&usuario=${dataStore.get("user")}`,
      {} 
        ).then((res:any)=>{
            if(res.status === 200){
                dialogos.show_toast("Orden de picking cancelada","success");
                show_modal_fnc(false);
            }
        })
    },()=>{})
    
}




  const obtener_tracking=()=>{
    apiService.CallAPI("GET","/api/inventory/tracking_orden?numero_orden=" + picking_id,{}).then((res:any)=>{
        if(res.status === 200){
            setTracking(res.response.data);
        }
    })
  }

    const obtener_picking_perfil =()=>{
        apiService.CallAPI("GET","/api/inventory/perfil_picking?picking_numero=" + picking_id,{}).then((res:any)=>{
            if(res.status === 200){                
                setPicking_profile(res.response.data);
                obtener_tracking();
            
            }
        })
    
    }

    const handleCloseClick = (e:any) => {
        e.preventDefault();
        show_modal_fnc(false);
      //  setModalIsOpen(false);
    };

    useEffect(() => {
        obtener_picking_perfil();
    }, [picking_id])
    



return (<>
 <dialog>
        <Modal isOpen={show_modal_value}
        ariaHideApp={false}
        style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '40px',
              right: '40px',
              width:'50%',
              bottom: '40px',
              border: '1px solid #ccc',
    
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              margin: 'auto',
              color:'black'


            }
          }}
        >
            <div className="flex flex-col gap-4">
                <h1 className="title">Perfil de orden de picking directa # {picking_id}</h1>

           
<div className="grid grid-cols-2 gap-4">
  <div>Orden número: {picking_profile?.numero_orden}</div>
  <div>Orden fecha: {picking_profile?.fecha}</div>
  <div>Sucursal solicita: {picking_profile?.sucursal}</div>
  <div>Usuario solicita: {picking_profile?.usuario_solicita}</div>

</div>
<div>
<TruessDatatable
            columnas={columnas}
            registros={picking_profile?.detalle}
            />
    </div>
    <div>
        <h3>Tracking de historial de orden</h3>
        <TruessDatatable
        registros={tracking}
        columnas={tracking_columnas}

        />
    </div>

<div className="flex flex-auto gap-2">
<button className="btn btn-primary" onClick={cancelar_orden}>Cancelar orden</button>

<button className="btn btn-secondary" onClick={handleCloseClick}>Cerrar</button>
</div>
</div>
</Modal>
</dialog>
</>)

}
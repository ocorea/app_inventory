"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { DataStore } from "@/app/lib/dataservice/dataStore";
import TruessDatatable from "@/app/componentes/datatable/datatable";
import Modal from 'react-modal';
import { useRouter, usePathname } from 'next/navigation'

export interface OrdenCompraDetalleProps{
    orden_compra_id:string,
    show_modal_fnc:any,
    show_modal_value:boolean
}

export default function ModalOrdenCompraDetalle({orden_compra_id,show_modal_fnc,show_modal_value}:OrdenCompraDetalleProps){

    const [orden_compra_profile, setOrden_compra_profile] = useState<any>([]);

    const apiService = new ApiService();
    const dialogos = new Dialogo();
    const dataStore = new DataStore();
    const router = useRouter();

    const columnas=[
        {header:'Producto Código',field:'producto_id'},
        {header:'Producto',field:'producto_nombre'},
    {header:'Cantidad solicitada',field:'producto_cantidad_solicitada'},
    {header:'Cantidad enviada',field:'producto_cantidad_entregada'},
    {header:'Cantidad pendiente',field:'producto_cantidad_pendiente'}
];

 const obtener_perfil=()=>{
        apiService.CallAPI("GET",`/api/inventory/perfil_orden_compra?orden_numero=${orden_compra_id}`,{}).then((res:any)=>{
            if(res.status === 200){
                setOrden_compra_profile(res.response.data);
            }
        })
 }

const cancelar_orden=()=>{
    dialogos.show_confirm("Cancelar orden de compra",
    "Está seguro de cancelar esta orden de compra",
    ()=>{
        apiService.CallAPI("POST",`/api/inventory/cancelar_orden_compra?orden_numero=${orden_compra_id}&usuario=${dataStore.get("user")}`,
      {} 
        ).then((res:any)=>{
            if(res.status === 200){
                dialogos.show_toast("Orden de compra cancelada","success");
                show_modal_fnc(false);
            }
        })
    },()=>{})

}

const handleCloseClick = (e:any) => {
    e.preventDefault();
    show_modal_fnc(false);
};

 useEffect(() => {
    obtener_perfil();
 }, [orden_compra_id])
 

 return (
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
                <h1 className="title">Perfil de orden de compra {orden_compra_id}</h1>

           
<div className="grid grid-cols-2 gap-4">
  <div>Orden número: {orden_compra_profile?.numero_orden_compra}</div>
  <div>Orden fecha: {orden_compra_profile?.fecha}</div>
  <div>Proveedor solicitado: {orden_compra_profile?.proveedor_nombre}</div>
  <div>Cantidad productos solicitados: {orden_compra_profile?.proveedor_nombre}</div>
  <div>Usuario solicita: {orden_compra_profile?.cantidad_productos}</div>
  <div>Comentarios de orden: {orden_compra_profile?.orden_compra_comentario}</div>

</div>
<div>
<TruessDatatable
            columnas={columnas}
            registros={orden_compra_profile?.detalle}
            />
    </div>
   

<div className="flex flex-auto gap-2">
<button className="btn btn-primary" onClick={cancelar_orden}>Cancelar orden</button>

<button className="btn btn-secondary" onClick={handleCloseClick}>Cerrar</button>
</div>
</div>

        </Modal>
    </dialog>
 )

}
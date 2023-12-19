"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { DataStore } from "@/app/lib/dataservice/dataStore";
import TruessDatatable from "@/app/componentes/datatable/datatable";
import ModalPickingDetalle from "@/app/componentes/inventarios/modal_picking_detalle";
import { useRouter, usePathname } from 'next/navigation'
import ModalOrdenCompraDetalle from "@/app/componentes/inventarios/modal_orden_compra";


export default function OrdenCompraPendienteAtender(){
    const [listaOrdenes, setListaOrdenes] = useState<any>([]);
    const [showModal, setShowModal] = useState(false);
    const [ordenId, setOrdenId] = useState<string>('');
    

    const apiService = new ApiService();
    const dialogoService = new Dialogo();
    const dataStore = new DataStore();
    const router = useRouter();

    const columnas=[{header:'Número de Orden',field:'numero_orden_compra'},
    {header:'Fecha',field:'orden_fecha'},
    {header:'Dias de antiguedad',field:'dias_antiguedad'},
    {header:'Proveedor Nombre',field:'proveedor_nombre'},
    {header:'Cantidad de productos',field:'cantidad_productos'}];


    const compraBotones = [{
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
    


    const obtenerOrdenes=()=>{
        apiService.CallAPI("GET","/api/inventory/lista_ordenes_compra_pendientes",{}).then((res:any)=>{
            if(res.status === 200){
                setListaOrdenes(res.response.data);
            }
        })
    }

    const seleccionar = (accion: string, row: any) => {
        if (accion === 'atender') {
            router.push(`/inventario/bodega/recibir_orden_compra?orden_compra=${row.numero_orden_compra}`);
        }
        if (accion === 'detalle') {
            setOrdenId(row.numero_orden_compra);
          setShowModal(true);
        }   
    
    }

    useEffect(() => {
obtenerOrdenes();
    }, [])
    


    return (
        <>
        <h1>Listado Ordenes de Compra pendientes de atención</h1>
        <TruessDatatable registros={listaOrdenes}
        func_botones={seleccionar}
        columnas={columnas} botones={compraBotones}/>
        {ordenId ?
     <>
     <ModalOrdenCompraDetalle orden_compra_id={ordenId}
      show_modal_fnc={setShowModal} show_modal_value={showModal}
     
     />
     </>
    :<></>}
        </>
    )
}
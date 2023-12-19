"use client"
import React from "react"
import {useState,useEffect} from "react"
import { DataStore } from "@/app/lib/dataservice/dataStore";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import { useRouter, usePathname } from 'next/navigation'
import TruessDatatable from "@/app/componentes/datatable/datatable";
import ModalPickingDetalleDirecto from "@/app/componentes/inventarios/modal_picking_detalle_directo";


export default function GestionarPickingDirecto(){
    const [listaPicking, setListaPicking] = useState<any>([]);
    const [showModal, setShowModal] = useState(false);
    const [pickingId, setPickingId] = useState<string>('');
    const [sucursalId, setSucursalId] = useState<number>(0);
    const router = useRouter();
    const dataService = new DataStore();

    const columnasPicking=[ 
        {header:'Número de Orden',field:'numero_orden',type:'text'},
        {header:'Fecha de Picking',field:'fecha',type:'text'},
        {header:'Estado',field:'estado',type:'text'},
        {header:'Usuario Solicitó',field:'usuario_solicita',type:'text'}];




    const pickingBotones = [{
            texto: 'Recibir',
            accion: 'recibir',
            color: 'primary'
        },
        {
            texto: 'Ver detalle',
            accion: 'detalle',
            color: 'sucess'
        },
        {
            texto: 'Generar PDF',
            accion: 'detalle',
            color: 'secondary'
        }
        ]

    const seleccionar = (accion: string, row: any) => {
            if (accion === 'recibir') {
                router.push(`/inventario/sucursal/recibir_picking_directo?picking_id=${row.numero_orden}`);
            }
            if (accion === 'detalle') {
               setPickingId(row.numero_orden);
                 setShowModal(true);
            }  
            if (accion==='generar_pdf'){
              //generar PDF picking directo
            }
        
        }

    const obtener_ordenes=(sucursal:number)=>{
        const apiService = new ApiService();
        apiService.CallAPI('GET',`/api/inventory/lista_ordenes_picking_estado_sucursal_directo?estado=1&sucursal=${sucursal}`,{}).then((res:any)=>{
            if (res.status === 200){
                setListaPicking(res.response.data);
            }
        })
    }

    useEffect(() => {
        obtener_ordenes(dataService.get('sucursal_id') as number);
        setSucursalId(dataService.get('sucursal_id') as number);
    }, [])
    
    

    return (
        <>
        <h1>Gestionar Picking Producto compra directa</h1>
        <TruessDatatable
        registros={listaPicking}
        columnas={columnasPicking}
        botones={pickingBotones}
        func_botones={seleccionar}
        />
        {pickingId ?
     <>
          <ModalPickingDetalleDirecto picking_id={pickingId} 
     show_modal_fnc={setShowModal} show_modal_value={showModal}/>


     </>



    :<></>}
        </>
    )
}
"use client"
import React from "react"
import {useState,useEffect} from "react"
import { DataStore } from "@/app/lib/dataservice/dataStore";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import TruessDatatable from "@/app/componentes/datatable/datatable";


export default function SolicitarPickingDirecto(){
    const dataStore = new DataStore();
    const apiService = new ApiService();
    const dialogoService = new Dialogo();

    const [listaProductos, setListaProductos] = useState<any>([]);
    const [sucursalId, setSucursalId] = useState<number>(0)

    const columnas=[{header:'Código',field:'producto_id'},
    {header:'Nombre',field:'producto_nombre'},
    {header:'Inventario actual',field:'existencia'},
    {header:'Existencia minima requerida',field:'existencia_minima'},
{header:'Cantidad solicitada',field:'cantidad_solicitada'}
]




    const obtenerProductos=(sucursal_id:number)=>{
        apiService.CallAPI('GET',`/api/inventory/lista_productos_solicitar_picking_directo?sucursal=${sucursal_id}`,{}).then((res:any)=>{
          if (res.status === 200){
            setListaProductos(res.response.data);
          }
           
        })
    }

    const obtener_payload=()=>{
        let payload_productos:any[]=[];
        listaProductos.forEach((element:any) => {
            payload_productos.push({
                producto_id:element.producto_id,
                cantidad_solicitada:element.cantidad_solicitada
            })
        });
        return {usuario_solicita : dataStore.get('user'),
        sucursal : dataStore.get('sucursal_id'),
        directa:true,
        productos:payload_productos}
      
    }

    const generarOrden=()=>{

        dialogoService.show_confirm("Orden de Picking",
        "Está seguro de generar esta orden de picking?",()=>{


            apiService.CallAPI('POST',`/api/inventory/solicitar_picking`,
            obtener_payload()
            ).then((res:any)=>{
               
                if (res.status === 200){
                    dialogoService.show_toast('Orden de picking generada número: ' + res.response.data ,'success');
                    
                    obtenerProductos(sucursalId);
                }
                 
              })
        },()=>{})
    

    }

    useEffect(() => {
        setSucursalId(dataStore.get('sucursal_id') as number)
        obtenerProductos(dataStore.get('sucursal_id') as number);
    }, [])
    


    return (<>
    <h2>Lista de productos a solicitar en Picking Directa</h2>
    <div>
        <button className="btn btn-primary" onClick={()=>{generarOrden()}}>
            Generar orden de Picking</button>
 
    </div>
    
    <TruessDatatable
     columnas={columnas}
    registros={listaProductos}

    ></TruessDatatable>
    </>)

}
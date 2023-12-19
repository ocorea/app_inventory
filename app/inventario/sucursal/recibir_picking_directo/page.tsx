"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import { EditDataTable } from '@/app/componentes/edit_datatable/edit_datatable';
import { DataStore } from '@/app/lib/dataservice/dataStore';
import TruessPDFViwer from "@/app/componentes/pdf_viewer/pdf_viewer";


export default function RecibirPicking(){

    const [pickingProfile, setPickingProfile] = useState<any>([]);
    const [detalleProductosSolicitados , setDetalleProductosSolicitados] = useState<any>([]);
    const [detalleProductosRecibir, setDetalleProductosRecibir] = useState<any>([]);
    const [pickingId, setPickingId] = useState<string>('');
    const [cantidadEnviar, setCantidadEnviar] = useState<number>(0);
    const [cantidadRecibir, setCantidadRecibir] = useState<number>(0);
    const [showModalPDF, setShowModalPDF] = useState(false);
    const [pdf_file, setPdf_file] = useState<any>(null);


    const dialogos = new Dialogo();
    const apiService = new ApiService();
    const dataStore = new DataStore();
    const router = useRouter();
    const searchParams = useSearchParams();


  const obtenerPickingProfile=(picking_id:string)=>{
        apiService.CallAPI("GET",`/api/inventory/perfil_picking?picking_numero=${picking_id}`,{}).then((res:any)=>{

            if(res.status === 200){
                  setPickingProfile(res.response.data);
                  }
        })
    }


    const columnasPicking=[
        {header:'Producto Código',field:'codigo_producto',type:'text'},
        {header:'Producto',field:'nombre_producto',type:'text'},
    {header:'Cantidad solicitada',field:'cantidad_solicitada',type:'number'},
   {header:'Cantidad a Recibir',field:'cantidad_recibida', type:'number'},
];




const recibir_orden_picking=()=>{
    if (detalleProductosRecibir.length === 0) {
        dialogos.show_toast("Debe indicar la cantidad a recibir de al menos un producto","ERROR");
        return;
    }
    dialogos.show_confirm("Recibir orden de picking",
    "Está seguro de recibir esta orden de picking",
    ()=>{
        console.log(
            {
                "usuario_recibe": dataStore.get("user"),
                "numero_orden": pickingId,
                "productos": detalleProductosRecibir
            }
        )
  
        apiService.CallAPI("POST","/api/inventory/recibir_picking",
        {
            "usuario_recibe": dataStore.get("user"),
            "numero_orden": pickingId,
            "productos": detalleProductosRecibir
        }
  
        ).then((res:any)=>{
            if(res.status === 200){
                dialogos.show_toast("Orden de picking recibida","success");
                router.push('/inventario/sucursal/picking_pendiente_recibir');
            }
        })
    },()=>{})
}

const contar_productos_enviar=(registros:any)=>{
    let cantidad_solicitada=0;
    let cantidad_recibida=0;
    let detalle_producto:any = [];
    let detalle_producto_recibir:any = [];
    registros.forEach((producto:any) => {

        if(producto._valuesCache.cantidad_solicitada>0){
            detalle_producto.push({'producto_id':producto._valuesCache.codigo_producto,
        'cantidad_solicitada': Number(producto._valuesCache.cantidad_solicitada)
        });
            cantidad_solicitada= cantidad_solicitada + Number(producto._valuesCache.cantidad_solicitada);
        }

        if(producto._valuesCache.cantidad_recibida>0){
            detalle_producto_recibir.push({'producto_id':producto._valuesCache.codigo_producto,
        'cantidad_recibida': Number(producto._valuesCache.cantidad_recibida),
        'cantidad_enviada': Number(producto._valuesCache.cantidad_recibida)
        });
            cantidad_recibida= cantidad_recibida + Number(producto._valuesCache.cantidad_recibida);
        }


    });
    setCantidadEnviar(cantidad_solicitada);
    setCantidadRecibir(cantidad_recibida);
    setDetalleProductosSolicitados(detalle_producto);
    setDetalleProductosRecibir(detalle_producto_recibir);
}

const download_pdf=()=>{
    apiService.CallAPI("GET",
    `/api/inventory/orden_picking_producto_disponibles_pdf?numero_orden=${pickingId}&bodega_id=1`,{}).then((res:any)=>{
        if(res.status === 200){
            setPdf_file(res.response.file_content);
            setShowModalPDF(true);
        }
    });

}


    useEffect(() => {
        setPickingId(searchParams.get('picking_id') || '');
        obtenerPickingProfile(searchParams.get('picking_id') as string);
    }, [])
    



    return (
        
        <div className='flex flex-col gap-3'>
            <h2>Recepción de orden de picking directa número: {pickingId} </h2>
            <div className="stats shadow" style={{marginBottom:'20px', }}>
            <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Productos a recibir</div>
    <div className="stat-value">{detalleProductosSolicitados.length}</div>

  </div>


      <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Unidades a recibir</div>
    <div className="stat-value">{cantidadRecibir}</div>
      </div>

  </div>

            <div className='flex flex-auto gap-3'>
               <button className='btn btn-primary' 
               onClick={()=>{router.push('/inventario/bodega/orden_pendiente_atender')}}>Volver</button>
        
               <button className='btn btn-success' onClick={()=>{
              recibir_orden_picking()
               }}>Recibir Orden</button>                
            </div> 

            {pickingProfile?.detalle ?
            <>
                     <EditDataTable columns_definition={columnasPicking} records={pickingProfile?.detalle}
                     selected_record={(datos:any)=>{
                        contar_productos_enviar(datos);
                       }}
                     />

                  
                     </>
            : <></>}

            {showModalPDF ? 
              <TruessPDFViwer
              titulo="Auxiliar de recolección"
              pdf_url={pdf_file}
                 show_modal_fnc={setShowModalPDF}
                 show_modal_value={showModalPDF}
         
              ></TruessPDFViwer> 
        :<></>}
   
            
        </div>
    )

}

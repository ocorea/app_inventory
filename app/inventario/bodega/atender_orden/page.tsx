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


export default function AtenderOrden(){

    const [pickingProfile, setPickingProfile] = useState<any>([]);
    const [productosEnviar, setProductosEnviar] = useState<any>([]);
    const [detalleProductosEnviar , setDetalleProductosEnviar] = useState<any>([]);
    const [pickingId, setPickingId] = useState<string>('');
    const [cantidadEnviar, setCantidadEnviar] = useState<number>(0);
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
   {header:'Cantidad a enviar',field:'cantidad_enviada', type:'number'},
];




const enviar_orden_picking=()=>{
    if (detalleProductosEnviar.length === 0) {
        dialogos.show_toast("Debe seleccionar al menos un producto para enviar","ERROR");
        return;
    }
    dialogos.show_confirm("Enviar orden de picking",
    "Está seguro de enviar esta orden de picking",
    ()=>{
  
        apiService.CallAPI("POST","/api/inventory/enviar_picking",
        {
            "usuario_envia": dataStore.get("user"),
            "numero_orden": pickingId,
            "sucursal_origin": dataStore.get("sucursal_id"),
            "productos": detalleProductosEnviar
        }
  
        ).then((res:any)=>{
            if(res.status === 200){
                dialogos.show_toast("Orden de picking enviada","success");
                router.push('/inventario/bodega/orden_pendiente_atender');
            }
        })
    },()=>{})
}

const contar_productos_enviar=(registros:any)=>{
    let cantidad_enviar=0;
    let detalle_producto:any = [];
    registros.forEach((producto:any) => {

        if(producto._valuesCache.cantidad_enviada>0){
            detalle_producto.push({'producto_id':producto._valuesCache.codigo_producto,
        'cantidad_enviada': Number(producto._valuesCache.cantidad_enviada)
        });
            cantidad_enviar= cantidad_enviar + Number(producto._valuesCache.cantidad_enviada);
        }
    });
    setCantidadEnviar(cantidad_enviar);
    setDetalleProductosEnviar(detalle_producto);


}

const download_pdf=()=>{
    apiService.CallAPI("GET",
    `/api/inventory/orden_picking_producto_disponibles_pdf?numero_orden=${pickingId}&bodega_id=1`,{}).then((res:any)=>{
        if(res.status === 200){
            setPdf_file(res.response.file_content);
            console.log(res.response.file_content);
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
            <h2>Atención de orden de picking número: {pickingId} </h2>
            <div className="stats shadow" style={{marginBottom:'20px', }}>
            <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Productos a enviar</div>
    <div className="stat-value">{detalleProductosEnviar.length}</div>

  </div>
           <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Unidades a enviar</div>
    <div className="stat-value">{cantidadEnviar}</div>

  </div>


  </div>

            <div className='flex flex-auto gap-3'>
               <button className='btn btn-primary' 
               onClick={()=>{router.push('/inventario/bodega/orden_pendiente_atender')}}>Volver</button>
               <button className='btn btn-secondary'
               onClick={()=>{
                //llamar el pdf
                download_pdf();
               }}
               >PDF Auxiliar</button>
               <button className='btn btn-success' onClick={()=>{
              enviar_orden_picking()
               }}>Enviar Orden</button>                
            </div> 

            {pickingProfile?.detalle ?
            <>
                     <EditDataTable columns_definition={columnasPicking} records={pickingProfile?.detalle}
                     selected_record={(datos:any)=>{
                        contar_productos_enviar(datos);
                        setProductosEnviar(datos)}}
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

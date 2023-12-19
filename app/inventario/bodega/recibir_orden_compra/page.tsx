"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { ApiService } from "@/app/lib/dataservice/APIService";
import { DataStore } from "@/app/lib/dataservice/dataStore";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import { useRouter,useSearchParams  } from 'next/navigation';
import Modal from 'react-modal';
import TruessPDFViwer from "@/app/componentes/pdf_viewer/pdf_viewer";
import { EditDataTable } from "@/app/componentes/edit_datatable/edit_datatable";


export default function RecibirOrdenCompra(){

    const [perfilOrdenCompra, setPerfilOrdenCompra] = useState<any>([]);
    const [ordenCompra, setOrdenCompra] = useState<string>('');
    const [cantidadRecibir, setCantidadRecibir] = useState<number>(0);
    const [paquetesRecibir, setPaquetesRecibir] = useState<number>(0);
    const [detalleProductosRecibir, setDetalleProductosRecibir] = useState<any>([]);

    //campos complementarios
    const [numeroFactura, setNumeroFactura] = useState<string>('');
    const [facturaSubtotal, setFacturaSubtotal] = useState<number>(0);
    const [facturaIva, setFacturaIva] = useState<number>(0);
    const [facturaDescuento, setFacturaDescuento] = useState<number>(0);
    const [facturaTotal, setFacturaTotal] = useState<number>(0);
    const [facturaFecha, setFacturaFecha] = useState<string>('');
    const [facturaFechaVence, setFacturaFechaVence] = useState<string>('');
    const [facturaComentarios, setFacturaComentarios] = useState<string>('');
    const [pdfFile , setPdfFile] = useState<any>(null);
    const [showModalPDF, setShowModalPDF] = useState(false);



    const dialogos = new Dialogo();
    const apiService = new ApiService();
    const dataStore = new DataStore();
    const router = useRouter();
    const searchParams = useSearchParams();


    const columnas=[{
        header:'Producto Código',
        field:'producto_id',
        type:'text'
    },
    {
        header:'Producto Nombre',
        field:'producto_nombre',
        type:'text'
    },
    {
        header:'Unidades solicitadas',
        field:'producto_cantidad_solicitada',
        type:'number'
    },
    {
        header:'Paquetes solicitados equivalentes',
        field:'producto_paquetes_pedir',
        type:'number'
    },
    {
        header:'Cantidad a Recibir',
        field:'cantidad_recibida',
        type:'number'
    
    }]



    const cancelar_orden=()=>{
        dialogos.show_confirm("Cancelar orden de compra",
        "Está seguro de cancelar esta orden de compra",
        ()=>{
            apiService.CallAPI("POST",`/api/inventory/cancelar_orden_compra?orden_numero=${ordenCompra}&usuario=${dataStore.get("user")}`,
          {} 
            ).then((res:any)=>{
                if(res.status === 200){
                    dialogos.show_toast("Orden de compra cancelada","success");
                    router.push("/inventario/bodega/orden_compra_pendiente");
             
                }
            })
        },()=>{})
    
    }

    const recibir_orden_compra=()=>{
        if (detalleProductosRecibir.length === 0) {
            dialogos.show_toast("Debe indicar la cantidad a recibir de al menos un producto","ERROR");
            return;
        }

        //validar campos complementarios
        if(numeroFactura === '' || facturaSubtotal === 0 || facturaTotal === 0 || facturaFecha === '' || facturaFechaVence === '' ){
            dialogos.show_toast("Debe proporcionar valor para los cambios obligatorios indicados","ERROR");
            return false;
        }
        
        dialogos.show_confirm("Recibir orden de compra",
        "Está seguro de recibir esta orden de compra",
        ()=>{
      
            apiService.CallAPI("POST","/api/inventory/recibir_orden_compra",
            {
                "usuario_recibe": dataStore.get("user"),
                "numero_orden": ordenCompra,
                "forma_pago":"2",
                "numero_factura": numeroFactura,
                "factura_subtotal": facturaSubtotal,
                "factura_impuestos": facturaIva,
                "factura_descuento": facturaDescuento,
                "factura_total": facturaTotal,
                "factura_fecha_emission": facturaFecha,
                "factura_fecha_vence": facturaFechaVence,
                "comentarios": facturaComentarios,
                "productos": detalleProductosRecibir
            }
      
            ).then((res:any)=>{
                if(res.status === 200){
                    dialogos.show_toast("Orden de compra recibida","success");
                    router.push('/inventario/bodega/orden_compra_pendiente');
                }
            })
        },()=>{})
    }

    const obtener_perfil_orden_compra=(orden_compra_id:string)=>{
        apiService.CallAPI("GET",`/api/inventory/perfil_orden_compra?orden_numero=${orden_compra_id}`,{}).then((res:any)=>{
            if(res.status === 200){
                setPerfilOrdenCompra(res.response.data);
            }
        })
    }

    const contar_productos_recibir=(registros:any)=>{
        let cantidad_enviar=0;
        let cantidad_recibida=0;
        let paquetes_recibir=0;
        let detalle_producto:any = [];
        registros.forEach((producto:any) => {

            //TODO: Controlar la cantidad de paquetes a recibir
    
            if(producto._valuesCache.cantidad_recibida>0){
                detalle_producto.push({'producto_id':producto._valuesCache.codigo_producto,
            'cantidad_entregada': Number(producto._valuesCache.cantidad_recibida)            
            });
                cantidad_recibida+= Number(producto._valuesCache.cantidad_recibida);
                paquetes_recibir+= Number(producto._valuesCache.producto_paquetes_pedir);

            }
    

        });
        setCantidadRecibir(cantidad_recibida);
        setPaquetesRecibir(paquetes_recibir);
        setDetalleProductosRecibir(detalle_producto);
  
    
    }

    const generar_PDF=()=>{
        apiService.CallAPI("GET",
        `/api/inventory/orden_compra_pdf?orden_numero=${ordenCompra}`,{}).then((res:any)=>{
            if(res.status === 200){
                setPdfFile(res.response.file_content);
                setShowModalPDF(true);
            }
        });


    }


    useEffect(() => {
        setOrdenCompra(searchParams.get('orden_compra') || '');
        obtener_perfil_orden_compra(searchParams.get('orden_compra') || '');

    }, [])

    return (
        <>
        <h1>Recibir orden de compra número {ordenCompra}</h1>
        <div className="stats shadow" style={{marginBottom:'20px', }}>
            <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Productos a recibir</div>
    <div className="stat-value">{detalleProductosRecibir.length}</div>

  </div>
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
      className="inline-block w-8 h-8 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Paquetes a recibir</div>
    <div className="stat-value">{paquetesRecibir}</div>

  </div>
           <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Unidades a recibir</div>
    <div className="stat-value">{cantidadRecibir}</div>

  </div>

  </div>
  {perfilOrdenCompra?.detalle?.length > 0 ?
  <>
  <div className="mx-10 mr-10">
    <h2>Información de factura</h2>
    <div className="grid grid-cols-4 gap-4">
        <div>Factura número: <input type="text" 
        required
        className="input input-primary input-bordered" value={numeroFactura} onChange={(e)=>setNumeroFactura(e.target.value)}/></div>
        <div>Factura fecha: 
            <input required type="date" className="input input-primary input-bordered" value={facturaFecha} onChange={(e)=>setFacturaFecha(e.target.value)}/></div>
        <div>Factura fecha vence: <input required type="date" className="input input-primary input-bordered" value={facturaFechaVence} onChange={(e)=>setFacturaFechaVence(e.target.value)}/></div>
        <div>Factura subtotal: <input required type="number" className="input input-primary input-bordered" value={facturaSubtotal} onChange={(e)=>setFacturaSubtotal(Number(e.target.value))}/></div>
        <div>Factura IVA: <input type="number" className="input input-primary input-bordered" value={facturaIva} onChange={(e)=>setFacturaIva(Number(e.target.value))}/></div>
        <div>Factura descuento: <input type="number" className="input input-primary input-bordered" value={facturaDescuento} onChange={(e)=>setFacturaDescuento(Number(e.target.value))}/></div>
        <div>Factura total: <input required type="number" className="input input-primary input-bordered" value={facturaTotal} onChange={(e)=>setFacturaTotal(Number(e.target.value))}/></div>
        <div>Factura comentarios: <input type="text" className="input input-primary input-bordered" value={facturaComentarios} onChange={(e)=>setFacturaComentarios(e.target.value)}/></div>
  </div>
  <div className="flex flex-row gap-3 mx-5">
    <button className="btn btn-success" onClick={recibir_orden_compra}>Confirmar recepción</button>
    <button className="btn btn-error" onClick={()=>cancelar_orden()}>Cancelar Orden</button>
    <button className="btn btn-secondary" onClick={generar_PDF}>Generar PDF Auxiliar</button>

  </div>
  <div className="grid grid-cols-1">
  <EditDataTable columns_definition={columnas}
    records={perfilOrdenCompra?.detalle}
    selected_record={(datos:any)=>{
        contar_productos_recibir(datos);
    }}
    > 
  
    </EditDataTable>
  </div>
</div></>: <></>
}
{showModalPDF ? 
              <TruessPDFViwer
              titulo="Auxiliar de recolección"
              pdf_url={pdfFile}
                 show_modal_fnc={setShowModalPDF}
                 show_modal_value={showModalPDF}         
              ></TruessPDFViwer> 
        :<></>}

        </>
    )
    

}
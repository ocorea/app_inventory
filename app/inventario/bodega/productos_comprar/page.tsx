"use client"
import React from "react"
import {useState,useEffect} from "react"
import { DataStore } from "@/app/lib/dataservice/dataStore";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import TruessDatatable from "@/app/componentes/datatable/datatable";
import TruessPDFViwer from "@/app/componentes/pdf_viewer/pdf_viewer";

export default function ProductosComprar(){

    const dataStore = new DataStore();
    const apiService = new ApiService();
    const dialogoService = new Dialogo();

    const [listaProductos, setListaProductos] = useState<any>([]);
    const [listaProveedores, setListaProveedores] = useState<any>([]);
    const [showModalPDF, setShowModalPDF] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pdf_file, setPdf_file] = useState<any>(null);
    const [proveedorSelected , setProveedorSelected] = useState<number>(0);
    const [comentarios, setComentarios] = useState<string>('');

    const columnas=[{header:'Código',field:'inventario_producto_id'},
    {header:'Nombre',field:'producto_nombre'},
    {header:'Inventario actual',field:'inventario_existencia'},
    {header:'Existencia minima requerida',field:'inventario_existencia_minima'},
    {header:'Compra mínima definida',field:'inventario_compra_minima'},
    {header:'Cantidad requiere comprar',field:'cantidad_requerida'},
    {header:'Paquetes requeridos',field:'paquetes_requeridos'},
    {header:'Proveedor recomendado',field:'proveedor_nombre_recomenedado'},
    {header:'Precio Proveedor recomendado ',field:'proveedor_precio'}];



    const columnasProveedor = [{header:'Id Proveedor',field:'proveedor_id'},
    {header:'Nombre Proveedor',field:'proveedor_nombre'}];

    const botonesProveedor=[{texto:'Ver PDF productos',accion:'generar_pdf',color:'primary'},
        {texto:'Generar Orden Compra',accion:'generar',color:'error'}
        ];

    
    //funciones
    
    const obtener_payload=()=>{
        let payload_productos:any[]=[];
        listaProductos.forEach((element:any) => {
            payload_productos.push({
                producto_id:element.inventario_producto_id,
                cantidad_solicitada:element.cantidad_requerida,
                paquetes_pedidos:element.paquetes_requeridos
            })
        });
        //1 = orden forma pago contado
        return {
            numero_orden:'',
            usuario_solicita : dataStore.get('user'),
            usuario_recibe:'',
            forma_pago:'1',
                 proveedor_id:proveedorSelected,
        comentarios:comentarios,
        productos:payload_productos}
      
    }


    const obtenerPDF=(proveedor_id:number)=>{
        apiService.CallAPI('GET',`/api/inventory/orden_compra_productos_comprar_pdf?proveedor_id=${proveedor_id}`,
        {}
        ).then((res:any)=>{
            if (res.status === 200){
                setPdf_file(res.response.file_content);
                setShowModalPDF(true);
            }
        })
    }
    const generarOrden=()=>{
        dialogoService.show_confirm("Orden de Compra",
        "Está seguro de generar esta orden de compra?",()=>{
            console.log( obtener_payload())
            apiService.CallAPI('POST',`/api/inventory/agregar_orden_compra`,
            obtener_payload()
            ).then((res:any)=>{
                if (res.status === 200){
                    if (res.response.status === 'error'){
                        dialogoService.show_toast("No fue posible generar la orden de compra: " + res.response.message,"ERROR");
                    }
                    else{
                     dialogoService.show_toast("Orden de compra generada","SUCCESS");
                        obtener_productos();
                    }
                    
                }
            })
        })
    }
    

    const seleccionar = (accion: string, row: any) => {
            if (accion === 'generar') {
                generarOrden();
             //   router.push(`/inventario/sucursal/recibir_picking_directo?picking_id=${row.numero_orden}`);
            }
            if (accion === 'generar_pdf') {
                setProveedorSelected(row.proveedor_id);
                obtenerPDF(row.proveedor_id);
               //setPickingId(row.numero_orden);
              //   setShowModalPDF(true);
            }  
    
        
        }

    const obtener_productos=()=>{
        apiService.CallAPI('GET',`/api/inventory/lista_productos_comprar`,{}).then((res:any)=>{
            if (res.status === 200){
                setListaProductos(res.response.data.productos);
                setListaProveedores(res.response.data.proveedores);
            }
        })
    }

    useEffect(()=>{
        obtener_productos();
    },[])


    return (
        <>
        <h1>Listado de productos requiren compra</h1>
        <div className="grd grid-cols-2 gap-3">
            <div>
                <button className="btn btn-success" onClick={()=>generarOrden()}>Generar orden de compra</button>
                <button className="btn btn-error" onClick={()=>obtenerPDF(0)}>Descargar PDF Auxiliar</button>
                <button className="btn btn-primary" onClick={()=>{obtener_productos()}}>Actualizar</button>

            <TruessDatatable columnas={columnas} registros={listaProductos}
         paginar={true}/>
            </div>
            <div>
                <h2>Generar orden de compra para proveedor especifico</h2>
                <TruessDatatable columnas={columnasProveedor} registros={listaProveedores}
                botones={botonesProveedor}
                func_botones={seleccionar}
            paginar={true}/>
                        </div>

            

        </div>

        {showModalPDF ? 
              <TruessPDFViwer
              titulo="Auxiliar Orden de Compra"
              pdf_url={pdf_file}
                 show_modal_fnc={setShowModalPDF}
                 show_modal_value={showModalPDF}

         
              ></TruessPDFViwer> 
        :<></>}
       
    
        </>
    )
}
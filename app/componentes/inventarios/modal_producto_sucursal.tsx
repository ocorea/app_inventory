"use client"
import React from "react";
import { useState, useEffect } from 'react'
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import { ApiService } from "@/app/lib/dataservice/APIService";
import Modal from 'react-modal';


export interface productProfileProps {
   producto_codigo:string,
   producto_nombre:string,
   producto_unidad_paquete:number,
   inventario_existencia:number,
   existencia_min_auto:number,
   existencia_max_auto:number,
   
}


export interface productoSucursalProps {
    producto_codigo:string,
    sucursal_id:number,
    show_modal_fnc:any
    show_modal_value:boolean
}

export default function ModalProductoSucursal({producto_codigo,sucursal_id,show_modal_fnc,show_modal_value}:productoSucursalProps){

    const [producto_perfil, setProducto_perfil] = useState<productProfileProps>({
        producto_codigo:'',
        producto_nombre:'',
        producto_unidad_paquete:0,
        inventario_existencia:0,
        existencia_min_auto:0,
        existencia_max_auto:0,
     })


     const [punto_reorden_min, setPunto_reorden_min] = useState<number>(0);
     const [punto_reorden_max, setPunto_reorden_max] = useState<number>(0);


     const dialogoService = new Dialogo();
     const apiService = new ApiService();


     const handleCloseClick = (e:any) => {
        e.preventDefault();
        show_modal_fnc(false);
      //  setModalIsOpen(false);
    };


    const obtenerProductoPerfil=()=>{
        apiService.CallAPI('GET',`/api/inventory/perfil_producto_inventario_sucursal?sucursal=${sucursal_id.toString()}&producto_codigo=${producto_codigo}`,{}).then((res:any)=>{
            setProducto_perfil(res.response.data);
            setPunto_reorden_min(res.response.data.inventario_existencia_minima || 0);
            setPunto_reorden_max(res.response.data.inventario_existencia_maxima || 0);
        })

     }

    const guardarCambios=()=>{

        apiService.CallAPI('PUT','/api/inventory/actualizar_punto_reorden_producto_sucursal',
        {sucursal_id:sucursal_id,
            producto_codigo:producto_codigo,
            existencia_minima:punto_reorden_min,
            existencia_maxima:punto_reorden_max}).then((res:any)=>{
             
            if(res.status === 200){
                show_modal_fnc();
                dialogoService.show_toast('Punto de reorden actualizado correctamente','SUCCESS');
            
            }
        })
    }


    const dialogo_guardar=()=>{
        dialogoService.show_confirm('Definición de punto de reorden',
        '¿Desea guardar los cambios realizados?',guardarCambios,()=>{});
    }


    useEffect(() => {   
        obtenerProductoPerfil();
    }, [producto_codigo,sucursal_id])


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
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              margin: 'auto',

            }
          }}
        >
        
                    <h2>Perfil de producto</h2>
        <form className="form-control space-y-8 > * + *">
    <div className="form-control">
    <label style={{color:'black'}} className="label"> Codigo de producto</label>
    <input className="input input-primary input-bordered input-info w-full" 
    readOnly type="text" value={producto_perfil.producto_codigo} />
    </div>

    <div className="form-control">
    <label style={{color:'black'}} className="label"> Nombre de producto</label>
    <input className="input input-primary input-bordered input-info w-full"
    readOnly type="text" value={producto_perfil.producto_nombre} />
    </div>
    
    <div className="form-control">
    <label style={{color:'black'}} className="label"> Unidades por paquete</label>
    <input className="input input-primary input-bordered input-info w-full"
    readOnly type="text" value={producto_perfil.producto_unidad_paquete} />
    </div>

    <div className="form-control">
    <label style={{color:'black'}} className="label"> Existencia actual</label>
    <input className="input input-primary input-bordered input-info w-full"
    readOnly type="text" value={producto_perfil.inventario_existencia} />
    </div>

    <div className="form-control">
    <label style={{color:'black'}} className="label"> Punto de reorden minimo</label>
    <input className="input input-primary input-bordered input-info w-full"
    onChange={(e)=> setPunto_reorden_min(e.target.value)} type="number"
     value={punto_reorden_min.toString()} />
    </div>

    <div className="form-control">
    <label style={{color:'black'}} className="label"> Punto de reorden maximo</label>
    <input className="input input-primary input-bordered input-info w-full"
    onChange={(e)=> setPunto_reorden_max(e.target.value)} type="number"
        value={punto_reorden_max.toString()} />
    </div>

    <div style={{display:'flex',gap:'20px'}}>


    <button className="btn btn-secondary" onClick={
        (e)=>{
            e.preventDefault();
            dialogo_guardar();
        }
       }>Guardar cambio</button>

    <button className="btn btn-primary" onClick={handleCloseClick}>Cerrar</button>
    </div>
    


</form>
           
</Modal>
        </dialog>



    )
}

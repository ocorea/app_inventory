"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import { ApiService } from '@/app/lib/dataservice/APIService';
import { Dialogo } from '@/app/lib/dialogs/dialogs';
import PaginaTitulo from '@/app/componentes/pagina_titulo/paginaTitulo';
import TruessDatatable from '@/app/componentes/datatable/datatable';


export default function UsuarioSucursal(){

    //Definicion de estados
    const [usuario_id, setUsuario_id] = useState<number>(0);
    const [usuario_sucursal_id, setUsuario_sucursal_id] = useState<number>();
    const [sucursal_id, setSucursal_id] = useState<number>(0);
    const [lista_usuario_sucursal , setLista_usuario_sucursal] = useState<any>([]);
    const [listaUsuarios, setListaUsuarios] = useState<any>([]);
    const [listaSucursales, setListaSucursales] = useState<any>([]);
    const [usuarioActivo, setUsuarioActivo] = useState<boolean>(true);


    //Instancias de servicios
    const apiService = new ApiService();
    const dialogoService = new Dialogo();

    //datos databla
    const columnas = [{
        header: 'ID', field: 'usuario_sucursal_id'},
        { header: 'Usuario nombre', field: 'usuario_nombre'},
        { header: 'Usuario correo', field: 'usuario_correo'},
        { header: 'Sucursal nombre', field: 'sucursal_nombre'},
        { header: 'Relacion activa', field: 'usuario_sucursal_activo'}
    ]
    const usuarioBotones=[{
        texto:'Seleccionar',
        accion:'seleccionar',
        color:'primary'
      }];



const seleccionar=(accion:string,row:any)=>{
    //mostrar los datos en los inputs
setUsuario_id(row.usuario_id);
setSucursal_id(row.sucursal_id);
setUsuario_sucursal_id(row.usuario_sucursal_id);
setUsuarioActivo(row.usuario_sucursal_activo);
}
    

    //Funciones
    const cargarUsuarios=()=>{
        apiService.CallAPI('GET','/api/inventory/lista_usuarios',{}).then((res:any)=>{
            setListaUsuarios(res.response.data);
        })
    }

    const cargarSucursales=()=>{
        apiService.CallAPI('GET','/api/inventory/lista_sucursales',{}).then((res:any)=>{
            setListaSucursales(res.response.data);
        })
    }

    const agregarUsuarioSucursal=()=>{

        apiService.CallAPI('POST','/api/inventory/agregar_usuario_sucursal',
        {usuario_id:usuario_id,
            usuario_sucursal_id:0,
             sucursal_id:sucursal_id,
             activo : usuarioActivo}).then((res:any)=>{
            dialogoService.show_toast("Registro agregado existosamente",'SUCCESS');
        })
    }

    const actualizarUsuarioSucursal=()=>{
        apiService.CallAPI('PUT','/api/inventory/actualizar_usuario_sucursal',
        {usuario_sucursal_id:usuario_sucursal_id,
            usuario_id:usuario_id
             ,sucursal_id:sucursal_id,
             activo : usuarioActivo}).then((res:any)=>{
            dialogoService.show_toast("Registro actualizado existosamente",'SUCCESS');
        })
    } 

    const obtenerUsuarioSucursal=()=>{
        apiService.CallAPI('GET','/api/inventory/obtener_usuarios_sucursal',
        {}).then((res:any)=>{
            setLista_usuario_sucursal(res.response.data);
        })
    }

    //Carga inicial de datos
    useEffect(()=>{
        cargarUsuarios();
        cargarSucursales();
        obtenerUsuarioSucursal();
    },[]);



    return (
        <>
        <PaginaTitulo titulo="Mantemiento usuario por sucursales"></PaginaTitulo>
        <div className='flex flex-row'>
            <div className='w-1/3'>
                <form className='form-control space-y-8 > * + *'>
                    <div className='form-control'>
                        <label className='label'>Usuario</label>
                        <select className='select select-bordered w-full'
                        onChange={(e)=>setUsuario_id(Number(e.target.value))}
                        >
                            <option id='0' value={0}>Seleccione</option>
                            {listaUsuarios.map((usuario:any)=>{
                                return <option
                                        value={usuario.usuario_id} id={usuario.usuario_id}>
                                        {usuario.usuario_nombre}</option>
                            })}
                        </select>
                    </div>
                    <div className='form-control'>
                        <label className='label'>Sucursal</label>
                        <select className='select select-bordered w-full'
                        onChange={(e)=>setSucursal_id(Number(e.target.value))}
                        ><option id='0' value={0}>Seleccione</option>
                            {listaSucursales.map((sucursal:any)=>{
                                return <option
                                        value={sucursal.sucursal_id} id={sucursal.sucursal_id}>
                                        {sucursal.sucursal_nombre}</option>
                            })}
                        </select>
                    </div>
                    <div className='form-control  w-52'>
                    <label className="cursor-pointer label">
                    <span className="label-text">Usuario Activo</span> 
                    <input                    
                        onChange={(e) => setUsuarioActivo(e.target.checked)}
                        checked={usuarioActivo}
                    type="checkbox" className="toggle toggle-primary" />
                    </label>
                    </div>
                    <div className='flex flex-row items-center space-x-10 > * + *'>
                        <button type="button" className="btn btn-secondary" 
                        onClick={()=>{agregarUsuarioSucursal();
                        obtenerUsuarioSucursal();
                        
                        }
                        
                        }>Agregar Registro</button>
<button disabled={usuario_sucursal_id===null?true:false} type="button" className="btn btn-primary" onClick={()=>{
  actualizarUsuarioSucursal();
  obtenerUsuarioSucursal();
  
}}>Actualizar Registro</button>
</div>

                    
                </form>
                </div>

                <div className='w-1/2'>
                    <TruessDatatable columnas={columnas}
                    registros={lista_usuario_sucursal}
                    botones={usuarioBotones}
                    func_botones={seleccionar}
                    
                    ></TruessDatatable>
            </div>

        </div>
        </>
    )


}
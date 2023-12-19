'use client'
import TruessDatatable from "@/app/componentes/datatable/datatable";
import PaginaTitulo from "@/app/componentes/pagina_titulo/paginaTitulo"
import { ApiService } from "@/app/lib/dataservice/APIService";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import React from "react"

function Usuarios(){
    const [email, setEmail] = React.useState("")
    const [id, setId] = React.useState<number>();
    const [nombre, setNombre] = React.useState("")
    const [activo, setActivo] = React.useState(true);
    const [role, setRole] = React.useState(2); //1 admin, 2 usuario 
    const [listaRoles, setListaRoles] = React.useState<any>([]);


    const [listaUsuarios, setListaUsuarios] = React.useState<any>([]);

    const apiService = new ApiService();
    const dialogos = new Dialogo();

//Definicion de Truess datatable

const usuarioColumnas = [{
    header:'ID',field:'usuario_id'
},
{header:'Nombre',field:'usuario_nombre'},
{header:'Email',field:'usuario_correo'},
{header:'Activo',field:'usuario_activo'},
{header:'Role',field:'role_nombre'}];

const usuarioBotones=[{
    texto:'Seleccionar',
    accion:'seleccionar',
    color:'primary'
  }];
  




const seleccionar=(accion:string,row:any)=>{
    //mostrar los datos en los inputs
    setEmail(row.usuario_correo);
    setId(row.usuario_id);
    setNombre(row.usuario_nombre);
    setActivo(row.usuario_activo);
    setRole(row.role_id);    
}
    
    
    

    const obtenerRoles = async () =>{
        try {
            apiService.CallAPI('GET','/api/inventory/lista_roles', {                   
            }).then((response) => { 
                if (response.status===200){
                    console.log(response.response.data);
                    setListaRoles(response.response.data);
                }
            
            })
        
        } catch (error) {
            dialogos.show_toast("Error en el proceso","ERROR");
        }

    }
    const obtenerUsuario= async () => {
            
            try {
                apiService.CallAPI('GET','/api/inventory/lista_usuarios', {                   
                }).then((response) => { 
                    if (response.status===200){
                        console.log(response.response.data);
                        setListaUsuarios(response.response.data);
                    }
                
                })
            
            } catch (error) {
                dialogos.show_toast("Error en el proceso","ERROR");
            }
    
    }

    const agregarUsuario= async () => {

        try {
            dialogos.show_confirm("Agregar Usuarios","Esta seguro de agregar un nuevo usuario?",
            ()=>{
                apiService.CallAPI('POST','/api/inventory/agregar_usuario', {
                    id:0,
                    correo: email,
                    nombre: nombre,
                    usuario:email,
                    activo: activo,
                    role_id: role
                }).then((response) => { 
                    if (response.status===200){
                        dialogos.show_toast("Usuario agregado correctamente","SUCCESS");
                    }
                   
                })
            },()=>{},'Aceptar','Cancelar')
        
         
        } catch (error) {
            dialogos.show_toast("Error en el proceso","ERROR");
        }
     }



     const actualizarUsuario= async () => {

        try {
            dialogos.show_confirm("Actualizar Usuario","Esta seguro de actualizar este usuario?",
            ()=>{
                apiService.CallAPI('POST','/api/inventory/actualizar_usuario', {
                    id:0,
                    correo: email,
                    nombre: nombre,
                    usuario:email,
                    activo: activo,
                    role_id: role
                }).then((response) => { 
                    if (response.status===200){
                        dialogos.show_toast("Usuario actualizado correctamente","SUCCESS");
                    }
                   
                })
            },()=>{},'Aceptar','Cancelar')
        
         
        } catch (error) {
            dialogos.show_toast("Error en el proceso","ERROR");
        }
     }
        

     React.useEffect(() => {
        obtenerRoles();
        obtenerUsuario();
        }, [])
            





    return (

     
        <>
        <PaginaTitulo titulo="Administración de usuarios"/>
        <div className='flex flex-row'> 
        <div className="w-1/3 m-5">
            <form className="form-control space-y-8 > * + *">
                <div className="form-control">
                    <label className="label">Email</label>
                    <input id="email" type="text" placeholder="Email" 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered input-info w-full"
                    value={email}></input>
                </div>
                <div className="form-control">
                    <label className="label">Nombre</label>
                    <input id="nombre" type="text" placeholder="Nombre" 
                    required
                    onChange={(e) => setNombre(e.target.value)}
                    className="input input-bordered input-info w-full"
                    value={nombre}></input></div>

                <div className="form-control w-52">
                    <label className="cursor-pointer label">
                    <span className="label-text">Usuario Activo</span> 
                    <input
                    
                        onChange={(e) => setActivo(e.target.checked)}
                        checked={activo}
                    type="checkbox" className="toggle toggle-primary" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="cursor-pointer label">Role de usuario</label>
                <select className="select select-bordered w-full"
                 onChange={(e)=>setRole(Number(e.target.value))}>

  {listaRoles.map((rol:any)=>{
        return <option value={rol.rol_id} id={rol.rol_id}>{rol.rol_nombre}</option>

  }
    )}
</select>

                </div>
                <div className='flex flex-row items-center space-x-10 > * + *'>
  <button type="button" className="btn btn-secondary" 
  onClick={()=>{agregarUsuario();
  obtenerUsuario();
  }
  
  }>Agregar Registro</button>
<button disabled={id===null?true:false} type="button" className="btn btn-primary" onClick={()=>{
  actualizarUsuario()
  obtenerUsuario();
}}>Actualizar Registro</button>
</div>
            </form>


        </div>
        <div className="w-1/2 m-5">
        <TruessDatatable columnas={usuarioColumnas}
   registros = {listaUsuarios}
   botones={usuarioBotones}
   func_botones={seleccionar}
   />

        </div>
        </div>
     
        </>
        
    )

}

export default Usuarios
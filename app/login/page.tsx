"use client"
import React, { useState, useEffect } from 'react';
import { DataStore } from '../lib/dataservice/dataStore';
import { Dialogo } from '../lib/dialogs/dialogs';
import { ApiService } from '../lib/dataservice/APIService';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';

const cambiar_clave =()=>{
    return (
        <div>
            <h3>Cambiar clave</h3>
        </div>
    )
    
}

export default function LoginPage() {
   const [showChangePassword, setShowChangePassword] = useState(false);
    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dialogos = new Dialogo();
    const apiService = new ApiService();
    const dataStore = new DataStore();
    const router = useRouter()
    const searchParams = useSearchParams();


    
    


    useEffect(() => {
       console.log('PARAMETROS: ',searchParams.get('returnUrl'))
    }, [])
    

    const autenticar=(event:any)=>{
        event.preventDefault();

        if (email === "" || password === "") {
            dialogos.show_toast("Debe ingresar usuario y contraseña","ERROR");
            return;
        }
      
        apiService.CallAPI("POST","/api/inventory/autenticar_usuario",
        {"usuario":email,
        "password":password}).then((res)=>{
            if(res.status === 200){
                if (res.response.reason === "WRONG_USER_PASSWORD") {
                    dialogos.show_toast("Usuario o contraseña incorrecta","ERROR")
                    return;
                }
                if (res.response.reason === "USER_AUTHENTICATED") {
                    const perfil = res.response.profile;
                    dataStore.set("token",res.response.token);
                    //obtener perfil de usuario
                    dataStore.set("nombre",perfil.usuario.usuario_nombre);
                dataStore.set("user",perfil.usuario.usuario_usuario);
                dataStore.set("role_id",perfil.usuario.rol_id);
                //por defecto tendra asinada solo una sucursal
             
                const sucursales = perfil.sucursales
                dataStore.set("isLoggedIn",true);
                dataStore.set("sucursal_id",sucursales[0].sucursal_id);
                dataStore.set("sucursal_nombre",sucursales[0].sucursal_nombre);
               dataStore.set("sucursal_lista",JSON.stringify(sucursales));
               router.push(searchParams.get('returnUrl')||'/');

                }

                
            }else{
                dialogos.show_toast("Error en la atenticación","ERROR")
            }
        })
        
    }

    return (
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Gestor de Inventario</h1>
            <form className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" required
                     onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese su correo" className="w-full input input-bordered" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Contraseña</span>
                    </label>
                    <input required onChange={(e)=> setPassword(e.target.value)}  type="password" placeholder="Ingrese su contraseña"
                        className="w-full input input-bordered" />
                </div>
                <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Olvidó su clave?</a>
                <div>
                    <button onClick={(e)=>{autenticar(e);
                    }} className="btn btn-block btn-primary">Aceptar</button>
                </div>
            </form>
        </div>
    </div>
    )

}



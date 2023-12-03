"use client";

import   React  from "react";
import { useState,useEffect } from "react";
import { ApiService } from "@/app/lib/dataservice/APIService";
import { EditDataTable } from "@/app/componentes/edit_datatable/edit_datatable";

import TruessDatatable from "@/app/componentes/datatable/datatable";
import { Dialogo } from "@/app/lib/dialogs/dialogs";
import PaginaTitulo from "@/app/componentes/pagina_titulo/paginaTitulo";



export default function Sucursales(){

    const [sucursal, setSucursal] = useState<string>();
    const [id, setId] = useState<number>(null);
    const [codigo,setCodigo] = useState<string>();
    const [direccion, setDireccion] = useState<string>();
    const [telefono, setTelefono] = useState<string>();
    const [esBodega, setEsBodega] = useState<boolean>(false);
    const [sucursalActiva, setSucursalActiva] = useState<boolean>(true);
    const [listaSucursales,setListaSucursales]= useState<any>([]);

    const apiService = new ApiService();
    const dialogoService = new Dialogo();

   

   //final bloque

  //React datatable # 2




const seleccionar=(accion:string,row:any)=>{
//mostrar los datos en los inputs
setSucursal(row.sucursal_nombre);
setDireccion(row.sucursal_direccion);
setTelefono(row.sucursal_telefono);
setEsBodega(row.sucursal_es_bodega);
setSucursalActiva(row.sucursal_activa);
setCodigo(row.sucursal_codigo);
setId(row.sucursal_id);

}





const sucursalColumna=[{ header: 'ID', field: 'sucursal_id',
sorteable:true
},
{ header: 'Código', field: 'sucursal_codigo'},
{ header: 'Nombre', field: 'sucursal_nombre', sortable:true},
{ header: 'Dirección', field: 'sucursal_direccion'},
{ header: 'Teléfono', field: 'sucursal_telefono'},
];

const sucursalBotones=[{
  texto:'Seleccionar',
  accion:'seleccionar',
  color:'primary'
}];



  const agregarSucursal = async () => {

      apiService.CallAPI('POST','/api/inventory/agregar_sucursal',
     {"id":0,
      "nombre":sucursal,
     "codigo":codigo,
          "direccion": direccion,
          "telefono": telefono,
          "activa": sucursalActiva,
             "es_bodega": esBodega}
      ).then((data) => { 
        if (data.status===200){
          dialogoService.show_toast("Registro agregado existosamente!","SUCCESS");
        }
       } ).catch((error) => console.log(error));  
  }

  const actualizarSucursal = async () => {
  
    dialogoService.show_confirm('Confirmación',
    '¿Desea actualizar el registro?',
  ()=>{  apiService.CallAPI('POST','/api/inventory/actualizar_sucursal',
   {
    "id":id,
    "nombre":sucursal,
    "codigo":codigo,
        "direccion": direccion,
        "telefono": telefono,
        "activa": sucursalActiva,
           "es_bodega": esBodega}
    ).then((data) => { 
      if (data.status===200){
        dialogoService.show_toast("Registro actualizado existosamente!","SUCCESS");
      }
     } ).catch((error) => console.log(error))},
()=>{},"Aceptar","Cancelar"
     
    )

    ;  
}


  const obtenerSucursales = async () => {      
      apiService.CallAPI('GET','/api/inventory/lista_sucursales',
    {}
      ).then((data) => { 
        if (data.status===200){
          setListaSucursales(data.response?.data);             
        }      
        } ).catch((error) => console.log(error)
        
        );
  }


  useEffect(() => {
    obtenerSucursales();
  }, [])
  




    return (
      <>
      <PaginaTitulo titulo={'Mantenimiento de sucursales'}></PaginaTitulo>
      <div className='flex flex-row'> 
            <div className='w-1/3 m-5'>

                <form className='form-control space-y-8 > * + *'>
                <div className="form-control">
                  <label className="label">Código de Sucursal </label>
                <input id="codigo" type="text" placeholder="Código de Sucursal"
                required
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                className='input input-bordered input-info w-full'
                />
                  </div>
                <div className="form-control">
                  <label className="label">Nombre de Sucursal</label>
                <input id="nombre" type="text" placeholder="Nombre de la sucursal"
                required
                value={sucursal}
                onChange={(e) => setSucursal(e.target.value)}
                className='input input-bordered input-info w-full'
                />
                  </div>

                  <div className="form-control">
                  <label className="label">Dirección de Sucursal</label>
                <input type="text" placeholder='Dirección'
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                className='input input-bordered input-info w-full '
                ></input>
                  </div>
                  
<div className="form-control">
  <label className="label">Teléfono</label>
<input type="text" placeholder='Teléfono'
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className='input input-bordered input-info w-full '
                ></input>

  
  </div>                  

<div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Es bodega</span> 
      <input
    
        onChange={(e) => setEsBodega(e.target.checked)}
        checked={esBodega}
      type="checkbox" className="toggle toggle-primary" />
    </label>
  </div>

  <div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Sucursal activa</span> 
      <input type="checkbox"
      checked={sucursalActiva}
    
        onChange={(e) => setSucursalActiva(e.target.checked)}
      className="toggle toggle-primary" />
    </label>
  </div>
  <div className='flex flex-row items-center space-x-10 > * + *'>
  <button type="button" className="btn btn-secondary" 
  onClick={()=>{agregarSucursal();
  obtenerSucursales();
  }
  
  }>Agregar Registro</button>
<button disabled={id===null ?true:false} type="button" className="btn btn-primary" onClick={()=>{
  actualizarSucursal();
  obtenerSucursales();
}}>Actualizar Registro</button>
</div>




           

                </form>
           

            </div>
            <div className='w-1/2 m-6'>
     

   <TruessDatatable columnas={sucursalColumna}
   registros = {listaSucursales}
   botones={sucursalBotones}
   func_botones={seleccionar}
   />


            </div>


        </div>
      </>
    
    )
}
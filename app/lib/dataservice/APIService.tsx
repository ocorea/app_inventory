import { Dialogo } from "../dialogs/dialogs";

//list of functions to make call of the apis reading the config file
interface api_call_parameter  {
    method: string,
    url:string,
    payload: any

}

export class ApiService{

   
    private url_base: string;
    constructor() {
        this.url_base = "http://localhost:8000";
        
    }

    private dialogoService = new Dialogo();



async CallAPI(method:string,url:string,payload:any) 
 {
    let parameters={}

    if (method !== 'GET') {
        parameters={
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
    }    
           
    }else{
        parameters={
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }

    
  

    const res = await fetch(this.url_base + url,parameters );

  

    //check the status of the response
    if (res.status === 200) {
        return {'status': 200, 'response': await res.json() } ;
    } else {
        if (res.status === 500) {
            console.log(res)
            this.dialogoService.show_toast("Error en el proceso, favor contacto a su administrador"  ,           
            
            "ERROR");
            return {'status': res.status, 'response':await res.text()}
        }
        this.dialogoService.show_toast("Operación no completada:" + res.text() ,   "INFO")        
         
        return {'status': res.status, 'response':await res.text()}
        //throw new Error(await res.text());
    

    
}
 }
}



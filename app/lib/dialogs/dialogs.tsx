import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export class Dialogo
{
    constructor(){

        //theme definition
        //Toast position
    
    }

    show_confirm(
        title:string,
        body:string,        
        func_accept?:any,
        func_cancel?:any,
        label_accept?:string,
        label_cancel?:string,

    ){
        confirmAlert({
            title: title,
            message: body,
            buttons: [
              {
                label: label_accept || 'Yes',
                onClick: () =>func_accept()
              },
              {
                label:label_cancel || 'No',
                onClick: () => func_cancel()
              }
            ]
          });

    }

    show_toast(
        message:string,
        type:string
        
    ){
        if (type==='SUCCESS'){

            toast.success(message,{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
          
        }
        if (type==='ERROR'){
            toast.error(message,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        if (type==='WARNING'){
            toast.warn(message,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }
        if (type==='INFO'){
            toast.info(message,{
                position: toast.POSITION.BOTTOM_CENTER
            })
        }

    }


}
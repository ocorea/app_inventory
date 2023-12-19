"use client"
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';


export interface TruessPDFViwerProps{
    titulo:string,
    show_modal_fnc:any,
    show_modal_value:boolean,
    pdf_url:string,  
}

export default function TruessPDFViwer({titulo,show_modal_fnc,show_modal_value,pdf_url}:TruessPDFViwerProps ){
    
    const [file, setFile] = useState<string>('');

    const handleCloseClick = (e:any) => {
        e.preventDefault();
        show_modal_fnc(false);

    };

    useEffect(() => {
        setFile(pdf_url);

    }, [])
    
 
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
    
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
              margin: 'auto',
              color:'black'


            }
          }}
        >
            <h2>{titulo}</h2>
            <iframe src={`data:application/pdf;base64,${file}`}  height="90%" width="100%"></iframe>


 <div className="flex flex-auto gap-2">
<button className="btn btn-secondary" onClick={handleCloseClick}>Cerrar</button>
</div>
 </Modal>
 </dialog>
    )
}
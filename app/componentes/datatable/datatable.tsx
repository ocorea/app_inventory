import React, { useState } from 'react';
import DataTable, { TableColumn , createTheme} from 'react-data-table-component';


type TableParameters={
    columnas:any;
    registros:any;
    botones?:any;
    func_botones?:any;
    paginar?: boolean ;

}

export default function TruessDatatable({columnas,registros,botones, func_botones, paginar=true}: TableParameters){


    //definicion de tema

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');


    //definicion de columnas
     const columnaSucursal: TableColumn<any>[] = [
        columnas.map((columna:any)=>{
            return {
                name: columna.header,
                selector: (row:any) => row[columna.field],
                sortable: columna?.sorteable
            }
        })
     ][0]

     //agregar los botones indicados
        if(botones){
            columnaSucursal.push({
                name: 'Acciones',
                cell: (row:any) => <div>
                    {botones.map((boton:any)=>{
                        return <button key={boton.accion} className={`btn btn-${boton.color}`} onClick={()=>{func_botones(boton.accion,row)}}>{boton.texto}</button>
                    })}
                </div>,
                ignoreRowClick: true,
                allowOverflow: true,
                button: true,
            })
        }





    return (

        <DataTable columns={columnaSucursal} 
        data={registros}
        theme="solarized"
        pagination={paginar}
        />

    )
}
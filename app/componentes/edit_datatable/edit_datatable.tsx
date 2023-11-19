import { useState, useEffect } from "react";
import "./table.css";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

//bloque demo data for datatable


  const TableCell = ({ getValue, row, column, table }) => {
    const initialValue = getValue();
    const columnMeta = column.columnDef.meta; 
    const tableMeta = table.options.meta;
    const [value, setValue] = useState(initialValue);
    
    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
    const onBlur = () => {
      table.options.meta?.updateData(row.index, column.id, value)
    }

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value)
      tableMeta?.updateData(row.index, column.id, e.target.value)
    }



    if (tableMeta?.editedRows[row.id]) {
      return columnMeta?.type === "select" ? (
        <select onChange={onSelectChange} value={initialValue}>
          {columnMeta?.options?.map((option: Option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          value={value}
          className="input"
          onChange={e => setValue(e.target.value)}
          onBlur={onBlur}
          type={columnMeta?.type || "text"}
        />
      )
    }
    return (
      <input
        value={value}
        className="input"
        onChange={e => setValue(e.target.value)}
        onBlur={onBlur}
        type={column.columnDef.meta?.type || "text"}
      />
    )
  }


  const EditCell = ({ row, table }) => {
    const meta = table.options.meta
    const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
      meta?.setEditedRows((old: []) => ({
        ...old,
        [row.id]: !old[row.id],
      }))
    }
    return meta?.editedRows[row.id] ? (
    
      <>
        {console.log('Fila: ',row.original)}
        <button>X</button> <button onClick={          
          setEditedRows}>✔</button>
      </>
    ) : (
      <button className="btn btn-primary" onClick={setEditedRows}>✐</button>
    )
  }


  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("studentId", {
      header: "Student ID",
      cell: TableCell,
      meta:{
        type: "number"
      }
    }),
    columnHelper.accessor("name", {
      header: "Full Name",
      cell: TableCell,
      meta:{
        type: "text"
      }
    }),
    columnHelper.accessor("dateOfBirth", {
      header: "Date Of Birth",
      cell: TableCell,
      meta:{
        type: "date"
      }
    }),
    columnHelper.accessor("major", {
      header: "Major",
      cell: TableCell,
      meta:{
        type: "text"
      }
    }),

  ];




  export const EditDataTable = ({records, columns_definition,selected_record}) => {
    const [data, setData] = useState(() => [...records]);
    const [editedRows, setEditedRows] = useState({});

    //generar la definicion de columnas
    let columns_array:any[] = []
    const columns2:any[] = columns_definition.map((columna:any) => {
      columns_array.push(columnHelper.accessor(columna.field, {
        header: columna.header,
        cell: TableCell,
        meta:{
          type: columna.type
        }
      }))
    


     });

     

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      meta: {
        editedRows,
      setEditedRows,
        updateData: (rowIndex: number, columnId: string, value: string) => {
          setData((old) =>
            old.map((row, index) => {
              if (index === rowIndex) {
                return {
                  ...old[rowIndex],
                  [columnId]: value,
                };
              }
              return row;
            })
          );
        },
      },
    });


    useEffect(() => {
      selected_record(editedRows)
    }, [editedRows])

    return (
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
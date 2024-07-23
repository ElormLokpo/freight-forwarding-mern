import {useState, useEffect} from "react"

import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { IProps } from "./types";
import ActionDropDown from "@/app/pages/dashboards/company-onwer/warehouses/components/action-dropdown";
import {
  flexRender, 
  useReactTable, 
  getCoreRowModel
} from "@tanstack/react-table"

const TableComponent = <T,>(props: IProps<T>) => {
  const [tableData, setTableData] = useState<any[] >([]);

  useEffect(()=>{
    setTableData(props.data);
  }, [props.data])
  
 
    const table = useReactTable({
      data: tableData,
      columns : props.columns,
      getCoreRowModel: getCoreRowModel()
    })
  
  

  return (
    <div className="dark:bg-black">
      <Table>
        <TableHeader>
            {
              table.getHeaderGroups().map(headerGroup=>(
                <TableRow key={headerGroup.id}>
                  {
                    headerGroup.headers.map(header=>(
                      <TableHead>
                          {
                            header.isPlaceholder? null 
                            :
                            flexRender(header.column.columnDef.header, header.getContext())
                          }
                      </TableHead>
                    ))
                    
                  }
                </TableRow>
              ))
            }
          
        </TableHeader>
        <TableBody>
          {
            table.getRowModel().rows.map(row=>(
              <TableRow key={row.id}>
                  {
                    row.getVisibleCells().map(cell=>(
                      <TableCell>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))
                  }
              </TableRow>
            ))
          }
         
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;

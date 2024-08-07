import {useState, useEffect} from "react"

import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  
} from "@/components/ui/table";
import { IProps } from "./types";
import {
  flexRender, 
  useReactTable, 
  getCoreRowModel
} from "@tanstack/react-table"


import { TableRow as TableRowComp } from "./components/table-row";

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
            <TableRowComp table={table}/>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;

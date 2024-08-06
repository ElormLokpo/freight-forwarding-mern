import * as React from "react";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { flexRender } from "@tanstack/react-table";
import { IProps } from "./types";
import { TableRow as CoreTableRow } from "@/components/ui/table";
import { TableCell as TableCellComp } from "@/app/components/table/components/table-cell";
import WarehouseDetail from "../../warehouses/components/detail";

const DetailModal: React.FC<IProps> = ({ row, detail_type }) => {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  let detail_render;


  switch(detail_type){
    case "warehouse":
      detail_render = ( <WarehouseDetail row={row}/>)
  }

  const handleClick = ()=>{
    console.log(row.original)
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
         
            <CoreTableRow key={row.id} className="hover:cursor-pointer" onClick={handleClick}>
              <TableCellComp row={row} />
            </CoreTableRow>
         
        </DialogTrigger>
        <DialogContent className="sm:max-w-[38rem] p-0 m-0">
            {detail_render}
         
        </DialogContent>
      </Dialog>
    );
  }
};

export default DetailModal;

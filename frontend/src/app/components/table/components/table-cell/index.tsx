import React from "react";
import { TableCell as CoreTableCell } from "@/components/ui/table";
import { flexRender } from "@tanstack/react-table";
import { IProps } from "./types";
import DetailModal from "@/app/pages/dashboards/company-onwer/components/detail-modal";

export const TableCell: React.FC<IProps> = ({ row }) => {
    const handleClickCell = ()=>{
        console.log("Hello")
    }

  return row
    .getVisibleCells()
    .map((cell: any) => (
      <CoreTableCell onClick={handleClickCell}>
       {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </CoreTableCell>
    ));
};



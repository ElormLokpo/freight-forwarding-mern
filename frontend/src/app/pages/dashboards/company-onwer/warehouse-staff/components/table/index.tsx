import React from "react";
import { IProps } from "./types";
import TableComponent from "@/app/components/table";
import { createColumnHelper } from "@tanstack/react-table";
import DelEditComponent from "@/app/components/del-edit";
import { WarehouseStaffResponseType } from "@/services/api/warehouse-staff/types";
import { DetailModalContext } from "@/context";

const CoWarehouseTable: React.FC<IProps> = (props) => {
  const columnHelper = createColumnHelper<WarehouseStaffResponseType>();

  const columns = [
    columnHelper.accessor("staff_id", {
      header: () => <span>Staff ID</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("fullname", {
      header: () => <span>Warehouse Staff Name</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("role", {
      header: () => <span>Staff Role</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("phone", {
      header: () => <span>Staff Phone Number</span>,
      cell: (item) => item.getValue(),
    }),
   
    columnHelper.accessor("freight_company_id.company_name", {
      header: () => <span>Freight Company Name</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("warehouse_id.name", {
      header: () => <span>Warehouse Name</span>,
      cell: (item) => item.getValue()? "true" : "false",
    }),

   
   
    columnHelper.display({
      id: "actions",
      cell: item=><DelEditComponent />
    })
  ];

  return (
    <DetailModalContext.Provider value="warehouse-staff">
      <TableComponent data={props.data} columns={columns} />
    </DetailModalContext.Provider>
  );
};

export default CoWarehouseTable;

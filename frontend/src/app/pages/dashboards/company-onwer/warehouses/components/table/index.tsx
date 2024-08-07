import React from "react";
import { IProps } from "./types";
import TableComponent from "@/app/components/table";
import { createColumnHelper, useReactTable } from "@tanstack/react-table";
import { WarehouseResponseType } from "@/services/api/warehouse/types";
import DelEditComponent from "@/app/components/del-edit";
import { DetailModalContext } from "@/context";

const CoWarehouseTable: React.FC<IProps> = (props) => {
  const columnHelper = createColumnHelper<WarehouseResponseType>();

  const columns = [
    columnHelper.accessor("name", {
      header: () => <span>Warehouse Name</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("location", {
      header: () => <span>Warehouse Location</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("manager_id", {
      header: () => <span>Warehouse Manager</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("freight_company_id.company_name", {
      header: () => <span>Freight Company Name</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("warehouse_vacant", {
      header: () => <span>Warehouse Vacant?</span>,
      cell: (item) => item.getValue()? "true" : "false",
    }),

    columnHelper.accessor("warehouse_staff", {
      header: () => <span>No. of Staff</span>,
      cell: (item) => item.getValue()?.length,
    }),
    columnHelper.accessor("current_shipment", {
      header: () => <span>No. of Current Shipment</span>,
      cell: (item) => item.getValue()?.length,
    }),
    columnHelper.accessor("current_vehicles", {
      header: () => <span>No. of Current Vehicles</span>,
      cell: (item) => item.getValue()?.length,
    }),
   
    columnHelper.display({
      id: "actions",
      cell: item=><DelEditComponent />
    })
  ];

  return (
    <DetailModalContext.Provider value={"warehouse"}>
      <TableComponent data={props.data} columns={columns} />
    </DetailModalContext.Provider>
  );
};

export default CoWarehouseTable;

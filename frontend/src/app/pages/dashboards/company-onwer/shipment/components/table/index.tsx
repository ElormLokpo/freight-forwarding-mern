import React from "react";
import { IProps } from "./types";
import TableComponent from "@/app/components/table";
import { createColumnHelper } from "@tanstack/react-table";
import DelEditComponent from "@/app/components/del-edit";
import { VehicleResponseType } from "@/services/api/vehicle/types";
import { ShipmentResponseType } from "@/services/api/shipment/types";
import { DetailModalContext } from "@/context";

const CoShipmentTable: React.FC<IProps> = (props) => {
  const columnHelper = createColumnHelper<ShipmentResponseType>();

  const columns = [
    columnHelper.accessor("tracking_number", {
      header: () => <span>Tracking Number</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("name", {
      header: () => <span>Shipment Name</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("quantity", {
      header: () => <span>Quantity</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("in_transit", {
      header: () => <span>In transit</span>,
      cell: (item) => (item.getValue() ? "true" : "false"),
    }),


    columnHelper.accessor("weight_height.weightValue", {
      header: () => <span>Weight</span>,
      cell: (item) => item.getValue()
    }),

    columnHelper.accessor("weight_height.heightValue", {
      header: () => <span>Height</span>,
      cell: (item) => item.getValue()
    }),

    columnHelper.accessor("containsFragile", {
      header: () => <span>Fragile</span>,
      cell: (item) => (item.getValue() ? "true" : "false"),
    }),
    columnHelper.accessor("status", {
      header: () => <span>Status</span>,
      cell: (item) => item.getValue() ,
    }),
   

    columnHelper.display({
      id: "actions",
      cell: (item) => <DelEditComponent />,
    }),
  ];

  return (
    <DetailModalContext.Provider value="shipment">
      <TableComponent data={props.data} columns={columns} />
    </DetailModalContext.Provider>
  );
};

export default CoShipmentTable;

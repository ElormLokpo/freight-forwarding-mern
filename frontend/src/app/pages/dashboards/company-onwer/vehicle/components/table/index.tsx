import React from "react";
import { IProps } from "./types";
import TableComponent from "@/app/components/table";
import { createColumnHelper } from "@tanstack/react-table";
import DelEditComponent from "@/app/components/del-edit";
import { VehicleResponseType } from "@/services/api/vehicle/types";

const CoWarehouseTable: React.FC<IProps> = (props) => {
  const columnHelper = createColumnHelper<VehicleResponseType>();

  const columns = [
    columnHelper.accessor("tracking_number", {
      header: () => <span>Tracking Number</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("name", {
      header: () => <span>Vehicle Name</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("number_plate", {
      header: () => <span>Number Plate</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("in_transit", {
      header: () => <span>Number Plate</span>,
      cell: (item) => (item.getValue() ? "true" : "false"),
    }),

    columnHelper.accessor("max_capacity.units", {
      header: () => <span>Units</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("max_capacity.weightValue", {
      header: () => <span>Weight Value</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("max_capacity.heightValue", {
      header: () => <span>Height Value</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("driver.fullname", {
      header: () => <span>Driver Name</span>,
      cell: (item) => item.getValue(),
    }),
    columnHelper.accessor("driver.license_number", {
      header: () => <span>License Number</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.accessor("freight_company.company_name", {
      header: () => <span>Freight Company Name</span>,
      cell: (item) => item.getValue(),
    }),

    columnHelper.display({
      id: "actions",
      cell: (item) => <DelEditComponent />,
    }),
  ];

  return (
    <>
      <TableComponent data={props.data} columns={columns} />
    </>
  );
};

export default CoWarehouseTable;

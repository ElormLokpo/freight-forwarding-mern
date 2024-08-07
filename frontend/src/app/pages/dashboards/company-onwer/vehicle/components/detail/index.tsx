import React from "react";
import { IProps } from "./types";

const VehicleDetail: React.FC<IProps> = ({ row }) => {
  return (
    <div className="p-5 dark:text-gray-300">
      <p className="font-semibold text-lg mb-5">Vehicle Details</p>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Vehicle Name:</p>
          <p className="py-1 border-b px-1">{row.original?.name}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Number Plate:</p>
          <p className="py-1 border-b px-1">{row.original?.number_plate}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">
            Vehcile In transit?:
          </p>
          <p className="py-1 border-b px-1">
            {row.original?.in_transit ? "true" : "false"}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">
            Freight Company Name:
          </p>
          <p className="py-1 px-1 border-b">
            {row.original?.freight_company.company_name}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Driver Name:</p>
          <p className="py-1 border-b px-1">{row.original?.driver.fullname}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">License Number:</p>
          <p className="py-1 border-b px-1">
            {row.original?.driver.license_number}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Capacity Units:</p>
          <p className="py-1 border-b px-1">{row.original?.max_capacity.units}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Weight:</p>
          <p className="py-1 border-b px-1">{row.original?.max_capacity.weightValue} {row.original?.max_capacity.units}</p>
        </div>

        <div>
        <p className="text-sm mb-1 dark:text-gray-400">Height:</p>
        <p className="py-1 border-b px-1">{row.original?.max_capacity.heightValue} {row.original?.max_capacity.units}</p>
        </div>


      </div>


      <div className="grid grid-cols-2 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Tracking Number:</p>
          <p className="py-1 border-b px-1">{row.original?.tracking_number}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Number of current shipment:</p>
          <p className="py-1 border-b px-1">
            {row.original?.shipment.length}
          </p>
        </div>
      </div>


    </div>
  );
};

export default VehicleDetail;

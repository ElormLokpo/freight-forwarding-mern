import React from "react";
import { IProps } from "./types";

const WarehouseStaffDetail: React.FC<IProps> = ({ row }) => {
  return (
    <div className="p-5 dark:text-gray-300">
      <p className="font-semibold text-lg mb-5">Warehouse Staff Details</p>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Fullname:</p>
          <p className="py-1 border-b px-1">{row.original?.fullname}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Phone Number:</p>
          <p className="py-1 border-b px-1">{row.original?.phone}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Role:</p>
          <p className="py-1 border-b px-1">{row.original?.role}</p>
        </div>
      </div>

      <div className="mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">
            Freight Company Name:
          </p>
          <p className="py-1 px-1 border-b">
            {row.original?.freight_company_id.company_name}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Warehouse Name:</p>
          <p className="py-1 px-1 border-b">
            {row.original?.warehouse_id.name}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Staff Id:</p>
          <p className="py-1 px-1 border-b">{row.original?.staff_id}</p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseStaffDetail;

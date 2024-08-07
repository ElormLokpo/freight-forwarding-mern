import React from "react";
import { IProps } from "./types";

const ShipmentDetail: React.FC<IProps> = ({ row }) => {
  return (
    <div className="p-5 dark:text-gray-300">
      <p className="font-semibold text-lg mb-5">Shipment Details</p>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Shipment Name:</p>
          <p className="py-1 border-b px-1">{row.original?.name}</p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Quantiy:</p>
          <p className="py-1 border-b px-1">
            {row.original?.quantity} {row.original?.quantity_unit}
          </p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">
            Shipment In transit?:
          </p>
          <p className="py-1 border-b px-1">
            {row.original?.in_transit ? "true" : "false"}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">
            Shipment Description:
          </p>
          <p className="py-1 px-1 border-b">{row.original?.description}</p>
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

      <div>
        <p className="text-sm font-semibold mb-1">Initial Pickup Location</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div>
            <p className="text-sm mb-1 dark:text-gray-400">GPS:</p>
            <p className="py-1 border-b px-1">
              {row.original?.initial_pickup_location.gps}
            </p>
          </div>

          <div>
            <p className="text-sm mb-1 dark:text-gray-400">City:</p>
            <p className="py-1 border-b px-1">
              {row.original?.initial_pickup_location.city}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-1">Final Dropoff Location</p>
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div>
            <p className="text-sm mb-1 dark:text-gray-400">GPS:</p>
            <p className="py-1 border-b px-1">
              {row.original?.final_destination.gps}
            </p>
          </div>

          <div>
            <p className="text-sm mb-1 dark:text-gray-400">City:</p>
            <p className="py-1 border-b px-1">
              {row.original?.final_destination.city}
            </p>
          </div>
        </div>
      </div>

   

      <div className="grid grid-cols-3 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Capacity Units:</p>
          <p className="py-1 border-b px-1">
            {row.original?.weight_height.units}
          </p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Weight:</p>
          <p className="py-1 border-b px-1">
            {row.original?.weight_height.weightValue}{" "}
            {row.original?.weight_height.units}
          </p>
        </div>

        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Height:</p>
          <p className="py-1 border-b px-1">
            {row.original?.weight_height.heightValue}{" "}
            {row.original?.weight_height.units}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Tracking Number:</p>
          <p className="py-1 border-b px-1">{row.original?.tracking_number}</p>
        </div>
        <div>
          <p className="text-sm mb-1 dark:text-gray-400">Is Fragile?:</p>
          <p className="py-1 border-b px-1">{row.original?.containsFragile? "true": "false"}</p>
        </div>
    
      </div>
    </div>
  );
};

export default ShipmentDetail;

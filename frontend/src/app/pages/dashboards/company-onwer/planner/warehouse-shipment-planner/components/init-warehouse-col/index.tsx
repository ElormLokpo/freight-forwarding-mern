import React from "react";
import { IProps } from "./types";

const InitWarehouseColumn:React.FC<IProps> = (props) => {
  return (
    <div className="p-2">
      <div className="mb-4">
        <p className="font-semibold mb-9">Unassigned Shipment</p>

        <div>
          
          {props.shipment?.map((i) => (
            <div className="rounded bg-gray-100 dark:bg-stone-900 dark:text-gray-300 mb-2 p-2">
              <div className="mb-4">
                <p className="font-semibold">{i.name}</p>
                <p className="text-xs">{i.tracking_number}</p>
              </div>
              <div className="flex gap-2 text-sm dark:text-slate-300">
                <p>W.{i.weight_height.weightValue} {i.weight_height.units}</p>
                <p>H.{i.weight_height.heightValue} {i.weight_height.units}</p>
                <p>Qty.{i.quantity} {i.quantity_unit}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InitWarehouseColumn;

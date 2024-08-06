import React from "react";
import { IProps } from "./types";
import ShipmentAssignModal from "./components/shipment-assign";

const WarehouseColumn:React.FC<IProps> = (props) => {

  console.log(props.incoming_shipment)
  return (
    <div className="p-2">
      <div className="mb-4">
        <p className="font-semibold mb-1">{props.warehouse_name}</p>

        <div className="flex justify-between items-center mb-2">
          {
            props.incoming_shipment?.length == 0 ? 
            <p className="font-semibold text-gray-400 text-sm">No Current Shipment Incoming</p>
            :
            <p className="font-semibold text-gray-400 text-sm">Incoming Shipment</p>
          }
          

          <>
            <ShipmentAssignModal warehouse_id={props.warehouse_id} />
          </>
        </div>

        <div className="mb-5">
          {props.incoming_shipment?.map((i) => (
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

        <div>
          {
            props.current_shipment?.length>0 && <p className="p-2 text-sm text-gray-400">Current Shipment</p>
          }
          {props.current_shipment?.map((i) => (
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

export default WarehouseColumn;

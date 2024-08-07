import { useContext, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { IProps } from "./types";
import { TableRow as CoreTableRow } from "@/components/ui/table";
import { TableCell as TableCellComp } from "@/app/components/table/components/table-cell";
import WarehouseDetail from "../../warehouses/components/detail";
import { DetailModalContext } from "@/context";
import VehicleDetail from "../../vehicle/components/detail";
import WarehouseStaffDetail from "../../warehouse-staff/components/detail";
import ShipmentDetail from "../../shipment/components/detail";

const DetailModal: React.FC<IProps> = ({ row }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  let detail_render;
  let detail_type = useContext(DetailModalContext);

  switch (detail_type) {
    case "warehouse":
      detail_render = <WarehouseDetail row={row} />;
      break;
    case "vehicle":
      detail_render = <VehicleDetail row={row} />;
      break;
    case "warehouse-staff":
      detail_render = <WarehouseStaffDetail row={row} />;
      break;
    case "shipment":
      detail_render = <ShipmentDetail row={row} />;
      break;
  }

  const handleClick = () => {
    console.log(row.original);
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <CoreTableRow
            key={row.id}
            className="hover:cursor-pointer dark:text-gray-300"
            onClick={handleClick}
          >
            <TableCellComp row={row} />
          </CoreTableRow>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[38rem] p-0 m-0">
          {detail_render}
        </DialogContent>
      </Dialog>
    );
  }
};

export default DetailModal;

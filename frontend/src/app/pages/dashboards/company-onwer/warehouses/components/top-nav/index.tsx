import { MainButton } from "@/app/components/button";
import { RightSheet } from "@/app/components/right-sheet";

import { FiPlusCircle } from "react-icons/fi";
import { AddWarehouseForm } from "../forms";

const WTopNav = () => {
  return (
    <div className="border-b py-2 px-3 flex justify-between">
      <div className="font-semibold flex items-center dark:text-gray-200">Warehouses </div>

      <div>
        <RightSheet 
        triggerButtonName="Add Warehouse" 
        icon={<FiPlusCircle />}
        sheetTitle="Add Warehouse"
        sheetDescription="Carefully fill out form to add warehouse to freight company"
        form = {<AddWarehouseForm />}
        />
       
      </div>
    </div>
  );
};

export default WTopNav;

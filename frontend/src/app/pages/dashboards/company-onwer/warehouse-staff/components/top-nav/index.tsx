import { MainButton } from "@/app/components/button";
import { RightSheet } from "@/app/components/right-sheet";

import { FiPlusCircle } from "react-icons/fi";
import { AddWarehouseStaffForm } from "../forms";

const WTopNav = () => {
  return (
    <div className="border-b py-2 px-3 flex justify-between">
      <div className="font-semibold flex items-center dark:text-gray-200">Warehouse Staff </div>

      <div>
        <RightSheet 
        triggerButtonName="Add Warehouse Staff" 
        icon={<FiPlusCircle />}
        sheetTitle="Add Warehouse Staff"
        sheetDescription="Carefully fill out form to add warehouse staff to the warehouse"
        form = {<AddWarehouseStaffForm />}
        />
       
      </div>
    </div>
  );
};

export default WTopNav;

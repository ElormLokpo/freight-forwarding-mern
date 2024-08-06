import { MainButton } from "@/app/components/button";
import { RightSheet } from "@/app/components/right-sheet";

import { FiPlusCircle } from "react-icons/fi";
import { AddVehicleForm } from "../forms";

const WTopNav = () => {
  return (
    <div className="border-b py-2 px-3 flex justify-between">
      <div className="font-semibold flex items-center dark:text-gray-200">Vehicle </div>

      <div>
        <RightSheet 
        triggerButtonName="Add Vehicle" 
        icon={<FiPlusCircle />}
        sheetTitle="Add Vehicle"
        sheetDescription="Carefully fill out form to vehicle to freight company"
        form = {<AddVehicleForm />}
        />
       
      </div>
    </div>
  );
};

export default WTopNav;

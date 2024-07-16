import { MainButton } from "@/app/components/button";
import { FaCirclePlus } from "react-icons/fa6";

const WTopNav = () => {
  return (
    <div className="border-b py-2 px-3 flex justify-between">
      <div className="font-semibold flex items-center dark:text-gray-200">Warehouses </div>

      <div>
        <MainButton>
          <div className="flex gap-2 items-center">
            <p>
              <FaCirclePlus />
            </p>
            <p>Add Warehouse</p>
          </div>
        </MainButton>
      </div>
    </div>
  );
};

export default WTopNav;

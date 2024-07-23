import ThemeDropDown from "@/app/components/theme-dropdown";

import { Toaster } from "sonner";
import CoFreightCompanyInitialForm from "../components/forms";
import {motion as m} from "framer-motion";
import { slideInLeft } from "@/animation";

const CoFreigntCompanyCreateInitial = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-black flex flex-col items-center justify-between py-10">
      <div>
        <div className="flex justify-center">
          <ThemeDropDown />
        </div>
      </div>
      <div className="w-full  flex flex-col items-center justify-center">
        
        <m.div
          variants={slideInLeft}
          initial="initial"
          animate= "animate"
          exit = "exit"
        >
          <div className="font-bold mb-3">
            <span className="dark:text-indigo-500">Shipper</span>{" "}
            <span className="font-light"> &gt; Freight Company </span>
          </div>
          <CoFreightCompanyInitialForm skipStep={true}/>
        </m.div>


      </div>

      <Toaster richColors />

      <div>
        <p className="font-light"></p>
      </div>
    </div>
  );
};

export default CoFreigntCompanyCreateInitial;

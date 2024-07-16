import ThemeDropDown from "@/app/components/theme-dropdown";
import { Outlet } from "@tanstack/react-router";
import { FaRegMoon } from "react-icons/fa";
import { Toaster } from "@/components/ui/toaster";

const CoAuthLayout = () => {
  return (
    <div className="h-screen bg-gray-100 dark:bg-black flex flex-col items-center justify-between py-10">
      <div>
        <div className="flex justify-center">
          <ThemeDropDown navStyle="bg-white p-5 rounded-full hover:cursor-pointer border hover:border-2 hover:shadow" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Outlet />
      </div>

      <Toaster />
      
      <div>
        <p className="font-light">
          By authenticating, you agree to our terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default CoAuthLayout;

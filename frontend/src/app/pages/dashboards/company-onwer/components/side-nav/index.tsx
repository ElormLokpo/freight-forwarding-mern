import { useState } from "react";
import { RiHome3Line } from "react-icons/ri";
import { FaRegBuilding, FaRegMoon } from "react-icons/fa";
import { PiWarehouseBold } from "react-icons/pi";
import { FiUsers, FiTruck } from "react-icons/fi";
import { TbTruckLoading } from "react-icons/tb";
import { LuSettings } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import Logo from "@/app/components/logo";
import { co_route as route } from "@/constants/routes";
import { NavLink } from "@/app/components/nav-link";
import ThemeDropDown from "@/app/components/theme-dropdown";
import { FreightCompanyDropDown } from "../freight-companies-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoTasklist } from "react-icons/go";

const CoSideNav = () => {
  let navStyle =
    "font-semibold dark:text-gray-200 mb-2 flex gap-2 items-center hover:bg-gray-700 hover:rounded  py-2 px-2 hover:text-white hover:cursor-pointer";
  let activeStyle = "bg-black dark:bg-indigo-500 text-white rounded";

  return (
    <div className="flex flex-col h-full justify-between p-2 text-sm">
      <div className="text-gray-600">
        <div className="mb-6 p-2 flex justify-between">
          <Logo />

          <ThemeDropDown />
        </div>

        <div>
          <NavLink
            to={route.freight_company}
            styleName={navStyle}
            activeStyle={activeStyle}
          >
            <p>
              <RiHome3Line />
            </p>
            <p>Home</p>
          </NavLink>

          <div className="mb-4">
            <FreightCompanyDropDown />
          </div>

          <NavLink
            to={route.warehouse}
            styleName={navStyle}
            activeStyle={activeStyle}
          >
            <p>
              <PiWarehouseBold />
            </p>
            <p>Warehouses</p>
          </NavLink>

          <NavLink
            to={route.warehouse_planner}
            styleName={navStyle}
            activeStyle={activeStyle}
          >
            <div className="pl-5 flex gap-2">
              <p>
              <GoTasklist />
              </p>
              <p>Warehouse Planner</p>
            </div>
          </NavLink>

          <NavLink
            to={route.warehouse_staff}
            styleName={navStyle}
            activeStyle={activeStyle}
          >
            <div className="pl-5 flex gap-2">
            <p>
              <FiUsers />
            </p>
            <p>Warehouses Staff</p>
            </div>
          </NavLink>
          <NavLink
            to={route.vehicle}
            styleName={navStyle}
            activeStyle={activeStyle}
          >
            <p>
              <FiTruck />
            </p>
            <p>Vehicles</p>
          </NavLink>
          <NavLink
            to={route.shipment}
            styleName={navStyle}
            activeStyle={activeStyle}
          >
            <p>
              <TbTruckLoading />
            </p>
            <p>Shipment</p>
          </NavLink>
        </div>

        <div className="border-t py-2">
          <NavLink to="" styleName={navStyle}>
            <p>
              <LuSettings />
            </p>
            <p>Settings</p>
          </NavLink>

          <NavLink to="" styleName={navStyle}>
            <p>
              <IoMdSearch />
            </p>
            <p>Search</p>
          </NavLink>
        </div>
      </div>

      <div className="text-gray-600">
        <div className="font-semibold flex gap-2 items-center py-2 px-2 hover:cursor-pointer">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <p className="">userone@gmail.com</p>
            <p className="flex gap-2  justify-between items-center hover:underline">
              Logout <MdLogout />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoSideNav;

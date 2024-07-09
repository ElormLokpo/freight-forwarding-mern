import CompanyOwnerDashboard from "@/app/pages/dashbaords/company-owner";
import FreightCompanyPage from "@/app/pages/dashbaords/company-owner/pages/freight-company";
import ShipmentPage from "@/app/pages/dashbaords/company-owner/pages/shipment";
import VehiclePage from "@/app/pages/dashbaords/company-owner/pages/vehicle";
import WarehousePage from "@/app/pages/dashbaords/company-owner/pages/warehouse";
import WarehouseStaffPage from "@/app/pages/dashbaords/company-owner/pages/warehouse-staff";
import {RouteObject} from "react-router-dom";


export const companyOwnerDashboardRoute:RouteObject = {
    path:"dashboard/company-owner",
    Component:CompanyOwnerDashboard,
    children:[
        { 
            path:"",
            Component: FreightCompanyPage
        },
        { 
            path:"freight-company",
            Component: FreightCompanyPage
        },
        {
            path:"shipment",
            Component: ShipmentPage
        },
        {
            path:"vehicle",
            Component: VehiclePage
        },
       
        { 
            path:"warehouse",
            Component:WarehousePage 
        },
        {
            path:"warehouse/staff",
            Component: WarehouseStaffPage
        },

]

}
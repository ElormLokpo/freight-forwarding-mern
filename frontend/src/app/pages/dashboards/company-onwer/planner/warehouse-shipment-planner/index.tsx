import { useEffect, useState } from "react";
import TopNav from "./components/top-nav";
import WarehouseColumn from "./components/warehouse-col";
import { useSelector } from "react-redux";
import { useGetAllShipmentsQuery, useGetAllWarehousesQuery } from "@/services/api";
import InitWarehouseColumn from "./components/init-warehouse-col";
import { ShipmentResponseType } from "@/services/api/shipment/types";
const WarehouseShipmentPlannerPage = () => {
  const freight_company_id = useSelector((state:any)=>state.freightCompany.value.current_freight_company._id)
  const  {data:warehouseData, isLoading:warehouseLoading} = useGetAllWarehousesQuery(freight_company_id);
  const {data:shipmentData} = useGetAllShipmentsQuery(freight_company_id);
  const [unAssignedShipmentData, setUnAssignedShipmentData] = useState<ShipmentResponseType[] | undefined>()

  useEffect(()=>{
    setUnAssignedShipmentData(shipmentData?.filter(a=>a.is_assigned == false))
  },[])

  return (
    <div>
      <TopNav />

      <div className="h-screen overflow-x-auto p-2">
        <div className="flex gap-2 min-w-0">
          <div className="h-screen w-[21rem] flex-none">
            <InitWarehouseColumn shipment={shipmentData} />
          </div>

          {
            warehouseLoading ? <p>Loading...</p> :
          
            warehouseData?.map((i, index) => (
            <div key={index} className="h-screen w-[21rem] flex-none">
              <WarehouseColumn warehouse_id={i._id} warehouse_name={i.name} current_shipment={i.current_shipment} incoming_shipment={i.incoming_shipment}/>
            </div>
          ))
          
          }
        </div>
      </div>
    </div>
  );
};

export default WarehouseShipmentPlannerPage;

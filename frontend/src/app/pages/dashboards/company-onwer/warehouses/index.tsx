import React, { useEffect, useState } from "react";
import WTopNav from "./components/top-nav";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllWarehousesQuery } from "@/services/api";
import { FreightCompanyInterface } from "@/services/redux/slices/freight-company/types";
import CoWarehouseTable from "./components/table";
import { WarehouseProvider } from "./components/context";

const CoWarehousePage = () => {
  const currentCompanyId: string = useSelector(
    (state: any) => state.freightCompany.value.current_freight_company._id
  );
  const { data, isLoading } = useGetAllWarehousesQuery(currentCompanyId);

  return (
    <WarehouseProvider>
      <div>
        <>
          <WTopNav />
        </>
        {isLoading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <>
            <CoWarehouseTable data={data} />
          </>
        )}
      </div>
    </WarehouseProvider>
  );
};

export default CoWarehousePage;

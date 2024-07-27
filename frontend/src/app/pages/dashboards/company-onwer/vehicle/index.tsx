import React, { useEffect, useState } from 'react'
import WTopNav from './components/top-nav'
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllVehiclesQuery } from '@/services/api';
import { FreightCompanyInterface } from '@/services/redux/slices/freight-company/types';
import CoVehicleTable from './components/table';



const CoVehiclePage = () => {
  const currentCompanyId:string = useSelector((state:any)=>state.freightCompany.value.current_freight_company._id)
  const {data ,isLoading} = useGetAllVehiclesQuery(currentCompanyId);

  useEffect(()=>{
    console.log("staff from component", data);
  },[data])


  return (
    <div>
      <><WTopNav /></>
      {
        isLoading?
        <>
          <p>Loading...</p>
        </>:<>

          <CoVehicleTable data = {data}/>
        
        </>
      }
    </div>
  )
}

export default CoVehiclePage
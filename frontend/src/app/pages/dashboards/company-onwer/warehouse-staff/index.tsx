import React, { useEffect, useState } from 'react'
import WTopNav from './components/top-nav'
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllWarehouseStaffQuery } from '@/services/api';
import { FreightCompanyInterface } from '@/services/redux/slices/freight-company/types';
import CoWarehouseTable from './components/table';



const CoWarehouseStaffPage = () => {
  const currentCompanyId:string = useSelector((state:any)=>state.freightCompany.value.current_freight_company._id)
  const {data ,isLoading} = useGetAllWarehouseStaffQuery(currentCompanyId);

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

          <CoWarehouseTable data = {data}/>
        
        </>
      }
    </div>
  )
}

export default CoWarehouseStaffPage
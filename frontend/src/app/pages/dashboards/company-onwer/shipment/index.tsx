import React, { useEffect, useState } from 'react'
import WTopNav from './components/top-nav'
import { useSelector, useDispatch } from 'react-redux';
import { useGetAllShipmentsQuery } from '@/services/api';
import { FreightCompanyInterface } from '@/services/redux/slices/freight-company/types';
import CoShipmentTable from './components/table';



const CoShipmentPage = () => {
  const currentCompanyId:string = useSelector((state:any)=>state.freightCompany.value.current_freight_company._id)
  const {data ,isLoading} = useGetAllShipmentsQuery(currentCompanyId);

  

  return (
    <div>
      <><WTopNav /></>
      {
        isLoading?
        <>
          <p>Loading...</p>
        </>:<>

          <CoShipmentTable data = {data}/>
        
        </>
      }
    </div>
  )
}

export default CoShipmentPage
import CompanyOwnerSideNav from '@/app/pages/dashbaords/company-owner/components/side-nav';
import React from 'react';
import {Outlet} from "react-router-dom";

const CompanyOwnerDashboardLayout = () => {
  return (
    <div className='grid grid-cols-16 h-screen'>
        <div className='col-span-2 border-r p-2'>
          <CompanyOwnerSideNav />
        </div>
  
        <div className='col-span-14 '>
        
          <Outlet />

        </div>
    </div>
  )
}

export default CompanyOwnerDashboardLayout
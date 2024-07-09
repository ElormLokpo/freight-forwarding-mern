import CompanyOwnerDashboardLayout from '@/app/layouts/company-owner'
import React from 'react'

const CompanyOwnerDashboard = () => {
    const isAuthenticated  = true;
  return (
    <>
        {isAuthenticated && <CompanyOwnerDashboardLayout />}
        
    </>
  )
}

export default CompanyOwnerDashboard
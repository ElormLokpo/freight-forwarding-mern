import WarehouseStaffPage from '@/app/pages/dashbaords/company-owner/pages/warehouse-staff'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboards/company-owner/_companyOwnerDashboardLayout/warehouse-staff')({
  component: () => <WarehouseStaffPage />
})
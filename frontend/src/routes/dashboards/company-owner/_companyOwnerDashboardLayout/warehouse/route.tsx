import WarehousePage from '@/app/pages/dashbaords/company-owner/pages/warehouse'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboards/company-owner/_companyOwnerDashboardLayout/warehouse')({
  component: () => <WarehousePage />
})
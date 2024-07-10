import VehiclePage from '@/app/pages/dashbaords/company-owner/pages/vehicle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboards/company-owner/_companyOwnerDashboardLayout/vehicle')({
  component: () => <VehiclePage />
})
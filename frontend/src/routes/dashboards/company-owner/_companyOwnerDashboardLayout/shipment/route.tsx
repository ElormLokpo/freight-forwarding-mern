import ShipmentPage from '@/app/pages/dashbaords/company-owner/pages/shipment'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboards/company-owner/_companyOwnerDashboardLayout/shipment')({
  component: () => <ShipmentPage />
})
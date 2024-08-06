import CoShipmentPage from '@/app/pages/dashboards/company-onwer/shipment'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_coLayout/dashboards/co/shipment')({
  component: () => <CoShipmentPage />
})
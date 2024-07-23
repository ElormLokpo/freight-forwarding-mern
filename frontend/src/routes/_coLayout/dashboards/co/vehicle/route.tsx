import CoVehiclePage from '@/app/pages/dashboards/company-onwer/vehicle'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_coLayout/dashboards/co/vehicle')({
  component: () => <CoVehiclePage />
})
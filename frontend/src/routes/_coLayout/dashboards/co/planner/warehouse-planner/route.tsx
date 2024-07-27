import WarehouseShipmentPlannerPage from '@/app/pages/dashboards/company-onwer/planner/warehouse-shipment-planner'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_coLayout/dashboards/co/planner/warehouse-planner')({
  component: () => <WarehouseShipmentPlannerPage />
})
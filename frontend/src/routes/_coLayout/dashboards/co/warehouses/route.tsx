import { createFileRoute } from '@tanstack/react-router'
import CoWarehousePage from "@/app/pages/dashboards/company-onwer/warehouses"

export const Route = createFileRoute('/_coLayout/dashboards/co/warehouses')({
  component: ()=> <CoWarehousePage />
})
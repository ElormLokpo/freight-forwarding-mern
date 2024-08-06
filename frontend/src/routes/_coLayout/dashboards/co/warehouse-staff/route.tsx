import { createFileRoute } from '@tanstack/react-router'
import CoWarehouseStaffPage from '@/app/pages/dashboards/company-onwer/warehouse-staff'

export const Route = createFileRoute('/_coLayout/dashboards/co/warehouse-staff')({
  component: ()=> <CoWarehouseStaffPage />
})
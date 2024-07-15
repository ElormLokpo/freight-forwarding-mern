import DashboardLayout from '@/app/layouts/dashboards'
import CoSideNav from '@/app/pages/dashboards/company-onwer/components/side-nav'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_coLayout')({
  component: () => <DashboardLayout SideNav = {<CoSideNav />} />
})
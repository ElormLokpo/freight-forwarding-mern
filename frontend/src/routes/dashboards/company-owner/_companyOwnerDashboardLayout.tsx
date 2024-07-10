import CompanyOwnerDashboardLayout from '@/app/layouts/company-owner'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboards/company-owner/_companyOwnerDashboardLayout')({
  component: () => <CompanyOwnerDashboardLayout />
})
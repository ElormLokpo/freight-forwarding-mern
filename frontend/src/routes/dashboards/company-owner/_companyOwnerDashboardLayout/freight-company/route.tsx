import FreightCompanyPage from '@/app/pages/dashbaords/company-owner/pages/freight-company'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboards/company-owner/_companyOwnerDashboardLayout/freight-company')({
  component: () => <FreightCompanyPage />
})
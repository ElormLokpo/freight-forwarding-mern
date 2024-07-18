import CoFreigntCompanyCreateInitial from '@/app/pages/dashboards/company-onwer/freight-company/initial-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/co/company-initial')({
  component: () => <CoFreigntCompanyCreateInitial />
})
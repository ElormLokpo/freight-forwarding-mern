import { createFileRoute } from '@tanstack/react-router'
import CoAuthLayout from '@/app/layouts/auth/company-onwer'

export const Route = createFileRoute('/_coAuthLayout')({
  component: () => <CoAuthLayout />
})
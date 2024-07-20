import CoSignUpPage from '@/features/auth/company-owner/signup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_coAuthLayout/co/signup')({
  component: () => <CoSignUpPage />
})
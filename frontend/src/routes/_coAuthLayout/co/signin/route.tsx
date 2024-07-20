import { createFileRoute } from '@tanstack/react-router'
import CoSignInPage from '@/features/auth/company-owner/signin'

export const Route = createFileRoute('/_coAuthLayout/co/signin')({
  component: () => <CoSignInPage />
})
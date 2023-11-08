import { useParams } from 'react-router-dom'

import { MainLayout } from '@/shared/layouts/MainLayout'
import { LoginForm } from '@/widgets/LoginForm'

export const AuthPage = () => {
  const { type } = useParams<{ type: keyof typeof showAuth }>()

  const showAuth = {
    login: () => (
      <>
        <LoginForm />
      </>
    ),
    register: () => (
      <>
        <LoginForm />
      </>
    ),
  }

  return <MainLayout>{showAuth[type]()}</MainLayout>
}

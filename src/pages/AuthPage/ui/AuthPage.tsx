import { useParams } from 'react-router-dom'

import { MainLayout } from '@/shared/layouts/MainLayout'
import { LoginForm } from '@/widgets/LoginForm'
import { RegisterForm } from '@/widgets/RegisterForm'

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
        <RegisterForm />
      </>
    ),
  }

  return (
    <MainLayout>
      <div className='flex flex-col items-center'>{showAuth[type]()}</div>
    </MainLayout>
  )
}

import { MainLayout } from '@/pages/layouts/MainLayout'
import { AuthForm } from '@/widgets/AuthForm'

export const AuthPage = () => (
  <MainLayout>
    <div className=' flex flex-col items-center h-4/5 justify-center max-h-fit'>
      <AuthForm />
    </div>
  </MainLayout>
)

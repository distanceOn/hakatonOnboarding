import { useParams } from 'react-router-dom'

import { MainLayout } from '@/shared/layouts/MainLayout'

export const AuthPage = () => {
  const { type } = useParams<{ type: keyof typeof showAuth }>()

  const showAuth = {
    login: () => <div>{type}</div>,
  }

  return <MainLayout>{showAuth[type]()}</MainLayout>
}

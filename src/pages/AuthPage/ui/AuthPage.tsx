import { useParams } from 'react-router-dom'

import { Header } from '@/widgets/header'

export const AuthPage = () => {
  const { type } = useParams<{ type: keyof typeof showAuth }>()

  const showAuth = {
    login: () => <div>{type}</div>,
  }

  return (
    <div className='px-24'>
      <Header />
      {showAuth[type]()}
    </div>
  )
}

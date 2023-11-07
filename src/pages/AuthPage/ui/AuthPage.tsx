import { useParams } from 'react-router-dom'

export const AuthPage = () => {
  const { type } = useParams<{ type: keyof typeof showAuth }>()

  const showAuth = {
    login: () => <div>{type}</div>,
  }

  return showAuth[type]()
}

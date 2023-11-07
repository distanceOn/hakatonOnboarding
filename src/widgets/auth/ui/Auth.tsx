import { getAuthWay } from '@/widgets/auth/logic/getAuthWay'

type AuthProps = {
  title: string
}

export const Auth: React.FC<AuthProps> = ({ title }) => getAuthWay(title)

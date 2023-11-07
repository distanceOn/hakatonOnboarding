import { AuthForm } from '@/features/authForm'
import { AuthSocials } from '@/features/authSocials'
import { TryLink } from '@/features/tryLink'
import * as S from '@/widgets/auth/ui/styled'

// рендерим форму в зависимости от title
export const getAuthWay = (title: string) => {
  const authWays: { [key: string]: () => JSX.Element } = {
    Войти: () => (
        <div>
          <TryLink />
          <S.Block>
            <S.Title>{title}</S.Title>
            <AuthForm type={title} />
            <AuthSocials />
          </S.Block>
        </div>
      ),
  }
  return authWays[title]()
}

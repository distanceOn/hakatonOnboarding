import { Link, useParams } from 'react-router-dom'

import { Logo } from '@/shared/ui'

const info = {
  login: {
    header: 'Войдите в аккаунт',
    link: '/auth/register/',
    linkValue: 'зарегистрируйтесь',
  },
  register: {
    header: 'Зарегистрируйтесь',
    link: '/auth/login/',
    linkValue: 'войдите в аккаунт',
  },
}

type ShowInfoType = keyof typeof info

export const AuthFormInfo = () => {
  const { type } = useParams<{ type: ShowInfoType }>()

  const { header, link, linkValue } = info[type]

  return (
    <div className='flex flex-col items-center mt-20'>
      <Logo wind='w-20 h-20' />
      <h2 className=' text-5xl font-extrabold mt-10'>{header}</h2>
      <span className=' text-2xl text-grey-primary font-normal mt-3'>
        Или{' '}
        <Link className=' text-blue-primary' to={link}>
          {linkValue}
        </Link>
      </span>
    </div>
  )
}

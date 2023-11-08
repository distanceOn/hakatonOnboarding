import { Link } from 'react-router-dom'

import { Button } from '@/features/Button'
import { HeaderItem } from '@/features/HeaderItem/index'
import { Logo } from '@/shared/ui'

export const Header = () => {
  const items = [
    {
      id: 1,
      value: 'Польза',
      link: '#',
    },
    {
      id: 2,
      value: 'Для работников',
      link: '#',
    },
    {
      id: 3,
      value: 'Для руководителей',
      link: '#',
    },
    {
      id: 4,
      value: 'Выгода',
      link: '#',
    },
  ]

  const btns = [
    {
      id: 1,
      value: 'Войти',
      link: '/auth/login/',
    },
    {
      id: 2,
      value: 'Зарегистрироваться',
      link: '/auth/register/',
      bg: 'bg-blue-primary',
      color: 'text-white-primary',
    },
  ]
  return (
    <div className='flex justify-between items-center py-9 flex-wrap'>
      <Link to='/'>
        <Logo wind='w-16 h-16' />
      </Link>
      <ul className='flex items-center gap-12'>
        {items.map(({ id, value, link }) => (
          <HeaderItem key={id} value={value} link={link} />
        ))}
      </ul>
      <div className='flex gap-5'>
        {btns.map(({ id, value, link, bg, color }) => (
          <Button key={id} value={value} link={link} bg={bg} color={color} />
        ))}
      </div>
    </div>
  )
}

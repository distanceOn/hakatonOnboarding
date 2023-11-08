import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'

import { Button } from '@/features/Button'
import { HeaderItem } from '@/features/HeaderItem/index'
import { setAuth } from '@/shared/model/userSlice'
import { Logo } from '@/shared/ui'

export const Header = () => {
  const { auth } = useAppSelector(state => state.user)

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

  const authItems = [
    {
      id: 1,
      value: 'Личный кабинет',
      link: '#',
    },
    {
      id: 2,
      value: 'Материалы',
      link: '#',
    },
    {
      id: 3,
      value: 'Прогресс',
      link: '#',
    },
    {
      id: 4,
      value: 'Обратная связь',
      link: '#',
    },
  ]

  const [resultItems, setResultItems] = useState(items)

  useEffect(() => {
    console.log(auth)
    if (auth) {
      setResultItems(authItems)
    } else {
      setResultItems(items)
    }
  }, [auth])

  const dispatch = useAppDispatch()

  const handleDispatchBtn = () => {
    if (auth) {
      dispatch(setAuth(false))
    }
  }

  const btns = [
    {
      id: 1,
      value: auth ? 'Выйти' : 'Войти',
      link: '/auth/login/',
      onClick: handleDispatchBtn,
      show: true,
    },
    {
      id: 2,
      value: 'Зарегистрироваться',
      link: '/auth/register/',
      bg: 'bg-blue-primary',
      color: 'text-white-primary',
      show: !auth,
    },
  ]
  return (
    <div className='flex justify-between items-center py-9 flex-wrap'>
      <Link to='/'>
        <Logo wind='w-16 h-16' />
      </Link>
      <ul className='flex items-center gap-12'>
        {resultItems.map(({ id, value, link }) => (
          <HeaderItem key={id} value={value} link={link} />
        ))}
      </ul>
      <div className='flex gap-5'>
        {btns.map(({ id, value, link, bg, color, onClick, show }) => (
          <Button
            key={id}
            value={value}
            link={link}
            bg={bg}
            color={color}
            onClick={onClick}
            show={show}
          />
        ))}
      </div>
    </div>
  )
}

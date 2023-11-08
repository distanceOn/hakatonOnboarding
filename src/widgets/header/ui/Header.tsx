import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/shared/model/hooks'

import { Button } from '@/features/Button'
import { HeaderItem } from '@/features/HeaderItem/index'
import { setAuth } from '@/shared/model/userSlice'
import { Logo } from '@/shared/ui'

export const Header = () => {
  const { auth, name } = useAppSelector(state => state.user)

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
      <div className='flex gap-5 items-center'>
        {auth ? (
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect width='32' height='32' rx='16' fill='white' />
            <g clipPath='url(#clip0_85_1165)'>
              <path
                d='M19 21H24L22.5951 19.5951C22.2141 19.2141 22 18.6973 22 18.1585V15C22 12.3876 20.3304 10.1651 18 9.34142V9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9V9.34142C11.6696 10.1651 10 12.3876 10 15V18.1585C10 18.6973 9.78595 19.2141 9.40493 19.5951L8 21H13M19 21V22C19 23.6569 17.6569 25 16 25C14.3431 25 13 23.6569 13 22V21M19 21H13'
                stroke='#9CA3AF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M23 14.5C26.0376 14.5 28.5 12.0376 28.5 9C28.5 5.96243 26.0376 3.5 23 3.5C19.9624 3.5 17.5 5.96243 17.5 9C17.5 12.0376 19.9624 14.5 23 14.5Z'
                fill='#6366F1'
                stroke='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_85_1165'>
                <rect
                  width='24'
                  height='24'
                  fill='white'
                  transform='translate(4 4)'
                />
              </clipPath>
            </defs>
          </svg>
        ) : null}
        {auth ? <p className='text-2xl'>{name}</p> : null}
        {auth ? <p className='text-2xl text-grey-fourth'>Посвященный</p> : null}
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

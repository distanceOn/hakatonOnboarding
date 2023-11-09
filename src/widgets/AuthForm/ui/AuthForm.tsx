import { useParams } from 'react-router-dom'

import { useAppDispatch } from '@/shared/model/hooks'

import { AuthFormInfo } from '@/entities/AuthFormInfo'
import { AuthInput } from '@/features/AuthInput'
import { AuthRemember } from '@/features/AuthRemember'
import { Button } from '@/features/Button'
import { setAuth } from '@/shared/model/UserSlice'

type InputType = {
  id: number
  label: string
  type: string
  placeholder: string
}

type BtnsType = {
  [key: string]: string
}

type InputsType = {
  [key: string]: InputType[]
}

export const AuthForm = () => {
  const { type } = useParams<{ type: string }>()
  const inputs: InputsType = {
    login: [
      {
        id: 1,
        label: 'Электронная почта',
        type: 'email',
        placeholder: 'user@mail.ru',
      },
      {
        id: 2,
        label: 'Пароль',
        type: 'password',
        placeholder: '********',
      },
    ],
    register: [
      {
        id: 1,
        label: 'Имя',
        type: 'text',
        placeholder: 'Олег',
      },
      {
        id: 2,
        label: 'Должность',
        type: 'text',
        placeholder: 'Должность',
      },
      {
        id: 3,
        label: 'Электронная почта',
        type: 'email',
        placeholder: 'user@mail.ru',
      },
      {
        id: 4,
        label: 'Пароль',
        type: 'password',
        placeholder: '********',
      },
      {
        id: 5,
        label: 'Повторите пароль',
        type: 'password',
        placeholder: '********',
      },
    ],
  }

  const btnValues: BtnsType = {
    login: 'Войти',
    register: 'Зарегистрироваться',
  }

  const dispatch = useAppDispatch()

  const handleClickButton = () => {
    dispatch(setAuth(true))
  }

  return (
    <div className=' w-2/5 px-16 flex flex-col gap-4'>
      <AuthFormInfo />
      <form action='#' className='flex flex-col gap-4'>
        {inputs[type].map(({ id, label, type, placeholder }) => (
          <AuthInput
            key={id}
            label={label}
            type={type}
            placeholder={placeholder}
          />
        ))}
        <AuthRemember />
        <Button
          onClick={handleClickButton}
          value={btnValues[type]}
          link='/'
          bg='bg-blue-primary'
          color='text-white-primary'
        />
      </form>
    </div>
  )
}

import { AuthFormInfo } from '@/entities/AuthFormInfo'
import { AuthInput } from '@/features/AuthInput'
import { AuthRemember } from '@/features/AuthRemember'
import { Button } from '@/features/Button'

export const LoginForm = () => {
  const loginInputs = [
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
  ]

  return (
    <div className=' w-2/5 px-16 py-14 flex flex-col gap-8'>
      <AuthFormInfo />
      <form action='#' className='flex flex-col gap-10 py-12'>
        {loginInputs.map(({ id, label, type, placeholder }) => (
          <AuthInput
            key={id}
            label={label}
            type={type}
            placeholder={placeholder}
          />
        ))}
        <AuthRemember />
        <Button
          value='Войти'
          link='/'
          bg='bg-blue-primary'
          color='text-white-primary'
        />
      </form>
    </div>
  )
}

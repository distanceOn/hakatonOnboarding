import { Link } from 'react-router-dom'

export const AuthRemember = () => (
  <div className='flex justify-between items-center flex-wrap'>
    <div className=' flex items-center gap-3 cursor-pointer'>
      <input id='check' className='w-6 h-6 cursor-pointer' type='checkbox' />
      <label htmlFor='check' className='text-xl cursor-pointer'>
        Сохранить вход
      </label>
    </div>
    <Link className='text-xl text-blue-primary' to='#'>
      Забыли пароль?
    </Link>
  </div>
)

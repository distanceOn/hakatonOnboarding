import { ProgressItem } from '@/features/ProgressItem'

export const Progress = () => {
  const items = [
    {
      id: 1,
      title: ' Дедлайн по “Техника в офисе”',
      result: '25 декабря 2023',
    },
    {
      id: 2,
      title: 'Последнее достижение',
      result: 'Герой онбординга',
    },
    {
      id: 3,
      title: 'Количество пройденных материалов',
      result: '7 из 10',
    },
    {
      id: 4,
      title: ' Процент правильных ответов',
      result: '93%',
    },
  ]

  return (
    <div className='w-full flex flex-col gap-32'>
      <div className='w-full flex flex-col gap-5'>
        <h4 className='text-4xl font-medium'>Прогресс</h4>
        <div className='grid grid-cols-2'>
          {items.map(item => (
            <ProgressItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-between h-2/5'>
        <h4 className='text-4xl font-medium'>Обратная связь</h4>
        <div className=' self-center w-3/5 h-3/5 rounded-xl border-2 border-dashed cursor-pointer border-grey-fourth flex flex-col items-center justify-center'>
          <svg
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22 10H12C9.79086 10 8 11.7909 8 14V36C8 38.2091 9.79086 40 12 40H34C36.2091 40 38 38.2091 38 36V26M35.1716 7.17157C36.7337 5.60948 39.2663 5.60948 40.8284 7.17157C42.3905 8.73367 42.3905 11.2663 40.8284 12.8284L23.6568 30H18L18 24.3431L35.1716 7.17157Z'
              stroke='#9CA3AF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <div className='text-2xl w-fit'>
            Задать вопрос руководителю, ментору или HR
          </div>
        </div>
      </div>
    </div>
  )
}

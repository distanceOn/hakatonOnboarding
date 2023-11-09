import { Button } from '@/features/Button'

export const Materials = () => {
  const items = [
    {
      id: 1,
      title: 'Design',
      count: '4 файла',
    },
    {
      id: 2,
      title: 'Сlient Service',
      count: '3 файла',
    },
    {
      id: 3,
      title: 'Engineering',
      count: '1 видео',
    },
    {
      id: 4,
      title: 'Project Managment',
      count: '3 файла',
    },
    {
      id: 5,
      title: 'FAQ',
      count: '2 теста',
    },
    {
      id: 6,
      title: 'Больничные, отпуска и удалённая работа',
      count: '1 файл',
    },
    {
      id: 7,
      title: 'Деловой этикет и офлайн-встречи',
      count: '2 видео',
    },
    {
      id: 8,
      title: 'Как устроена компания',
      count: '1 тест, 1 файл',
    },
  ]

  return (
    <div className=' w-4/12'>
      <h3 className='text-5xl font-extrabold p-3'>Материалы</h3>
      <ul
        className=' p-8 overflow-y-scroll flex flex-col gap-10'
        style={{ maxHeight: '75vh' }}
      >
        {items.map(({ id, title, count }) => (
          <li
            className='flex cursor-pointer hover:bg-slate-200 p-2 rounded-2xl'
            key={id}
          >
            <div className='flex flex-col gap-2'>
              <p className='text-2xl'>{title}</p>
              <p className='text-xl text-grey-fourth'>{count}</p>
            </div>
            <svg
              className='ml-auto'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='32' height='32' rx='16' fill='white' />
              <path
                d='M16 12C14.8954 12 14 11.1046 14 10C14 8.89543 14.8954 8 16 8C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12Z'
                fill='#9CA3AF'
              />
              <path
                d='M16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18Z'
                fill='#9CA3AF'
              />
              <path
                d='M16 24C14.8954 24 14 23.1046 14 22C14 20.8954 14.8954 20 16 20C17.1046 20 18 20.8954 18 22C18 23.1046 17.1046 24 16 24Z'
                fill='#9CA3AF'
              />
            </svg>
          </li>
        ))}
      </ul>
      <Button
        value='Открыть все материалы'
        link={'#'}
        bg='bg-blue-primary'
        color='text-white-primary'
        width='w-full'
      />
    </div>
  )
}

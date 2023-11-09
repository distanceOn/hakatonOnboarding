type MaterialProps = {
  title: string
  label: string
  desc: string
}

import classNames from 'classnames'

export const Material: React.FC<MaterialProps> = ({ title, label, desc }) => {
  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num > 3 ? num - 3 : num) + '...'
    }
    return str
  }

  let labelClasses = ''

  if (label === 'Материалы') {
    labelClasses = 'bg-rose-400 text-rose-900'
  } else if (label === 'Общие курсы') {
    labelClasses = 'bg-green-400 text-green-900'
  } else if (label === 'Тесты') {
    labelClasses = 'bg-blue-400 text-blue-900'
  } else if (label === 'Локальные курсы') {
    labelClasses = ' bg-yellow-400 text-yellow-900'
  }

  return (
    <li className='flex flex-col gap-3'>
      <div className='flex gap-5 items-center'>
        <h5 className='text-2xl font-bold'>{title}</h5>
        <p className={classNames('text-xl p-2 rounded-xl', labelClasses)}>
          {label}
        </p>
      </div>
      <p className='text-2xl'>{truncateString(desc, 200)}</p>
    </li>
  )
}

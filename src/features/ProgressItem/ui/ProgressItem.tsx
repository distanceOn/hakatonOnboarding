import React from 'react'

type ProgressItemProps = {
  title: string
  result: string
}
export const ProgressItem: React.FC<ProgressItemProps> = ({
  title,
  result,
}) => (
  <div className='flex flex-col gap-2 p-8'>
    <h5 className=' text-2xl text-grey-fourth'>{title}</h5>
    <p className=' text-5xl font-medium'>{result}</p>
  </div>
)

import React from 'react'

type InputProps = {
  label?: string
  type: string
  placeholder?: string
}
export const AuthInput: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
}) => (
  <div className='flex flex-col'>
    {label ? (
      <label className=' mb-2 text-2xl text-grey-secondary'>{label}</label>
    ) : (
      ''
    )}

    <input
      className=' text-2xl py-4 px-6 border-grey-third rounded-lg border'
      type={type}
      placeholder={placeholder}
    />
  </div>
)

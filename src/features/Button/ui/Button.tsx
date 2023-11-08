import React from 'react'
import { useNavigate } from 'react-router-dom'

type ButtonProps = {
  value: string
  link: string
  bg?: string
  color?: string
}
export const Button: React.FC<ButtonProps> = ({ value, link, bg, color }) => {
  const navigation = useNavigate()

  return (
    <button
      onClick={() => navigation(link)}
      className={[
        `text-2xl py-4 px-7 text-black-primary rounded-xl shadow-sm`,
        bg,
        color,
      ].join(' ')}
    >
      {value}
    </button>
  )
}

import React from 'react'
import { useNavigate } from 'react-router-dom'

type ButtonProps = {
  value: string
  link: string
  bg?: string
  color?: string
  onClick?: () => void
  show?: boolean
  width?: string
}
export const Button: React.FC<ButtonProps> = ({
  value,
  link,
  bg,
  color,
  onClick,
  show = true,
  width,
}) => {
  const navigation = useNavigate()

  if (!show) return null

  const handleClick = () => {
    console.log('Button clicked')
    navigation(link)
    if (onClick) {
      console.log('onClick prop is present')
      onClick()
    }
  }

  return (
    <button
      onClick={handleClick}
      className={[
        `text-2xl py-4 px-7 text-black-primary rounded-xl shadow-sm `,
        bg,
        color,
        show,
        width,
      ].join(' ')}
    >
      {value}
    </button>
  )
}

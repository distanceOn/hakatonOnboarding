import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  value: string
  link: string
  bg?: string
  color?: string
}
export const Button: React.FC<ButtonProps> = ({ value, link, bg, color }) => (
  <button
    className={[
      `text-2xl py-4 px-7 text-black-primary rounded-xl shadow-sm`,
      bg,
      color,
    ].join(' ')}
  >
    <Link to={link}>{value}</Link>
  </button>
)

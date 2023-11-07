import React from 'react'
import { Link } from 'react-router-dom'

type HeaderItemProps = {
  value: string
  link: string
}
export const HeaderItem: React.FC<HeaderItemProps> = ({ value, link }) => (
  <li className='text-2xl'>
    <Link to={link}>{value}</Link>
  </li>
)

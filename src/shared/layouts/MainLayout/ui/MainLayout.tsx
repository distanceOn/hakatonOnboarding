import type { ReactNode } from 'react'

import { Header } from '@/widgets/header'

type MainLayoutProps = {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className='px-24'>
    <Header />
    {children}
  </div>
)


import { Header } from '@/widgets/Header'
import type { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className='px-24 h-screen'>
    <Header/>
    {children}
  </div>
)

import * as S from './style'
import { SidebarList } from '@/features/SidebarList'
import { SidebarProfile } from '@/features/SidebarProfile'
import { Logo } from '@/shared/ui'

export const Sidebar = () => (
  <S.SidebarContainer>
    <Logo />
    <SidebarList />
    <SidebarProfile />
  </S.SidebarContainer>
)

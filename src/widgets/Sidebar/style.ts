import styled from 'styled-components'

import { getColor } from '@/app/styles/Theme'

export const SidebarContainer = styled.div`
  width: clamp(320px, 22.23vw, 510px);
  height: 100vh;
  padding: 1.67vw 2.23vw;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${getColor('bg')};
  border-right: 1px solid #f1f2f4;
`

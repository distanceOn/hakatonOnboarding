import styled from 'styled-components'

import { getColor } from '@/app/styles/Theme'

export const Block = styled.div`
  box-sizing: border-box;
  padding: 4.56vh 3.33vw 4.44vh;
  width: 34.72vw;
  background-color: ${getColor('widget_auth_block_bg')};
  border-radius: 2.92vw;
  z-index: 10;
  margin-top: -4.7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 2.4rem; // 2.22vw;
  font-weight: 600;
  line-height: 2.88rem; // 2.64vw;
  letter-spacing: -0.02em;
  color: ${getColor('widget_auth_title')};
  margin-bottom: 3.56vh;
`

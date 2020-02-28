import styled from 'styled-components'
import { colors } from '../../general-styles'

export const HeaderTag = styled.header `
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  font-weight: 600;
  font-size: 1.8rem;
  color: ${props => props.bg > '#cccccc' ? colors.black : colors.white };
  background-color: ${props => props.bg};
  box-shadow: 0 0 3px #ddd;
`
export const Logo = styled.h1 `
  font-size: 1.8rem;
  font-weight: 300;
`

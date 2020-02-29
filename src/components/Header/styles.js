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

export const Button = styled.a `
  background: ${colors.gradient.start}; 
  background:  linear-gradient(to right, ${colors.gradient.start}, ${colors.gradient.end});
  background:  -webkit-linear-gradient(to right, ${colors.gradient.start}, ${colors.gradient.end}); 
  color: #ffffff;
  text-decoration: none;
  border-radius: 2px;
  transition: background-color 0.3s ease-in 0s;
  font-weight: 300;
  font-size: 1rem;
  padding: 10px 30px;
`

export const Nav = styled.nav `
  display: ${props => props.flex ? 'flex' : 'block'};
  justify-content: space-between;
  align-items: center;
`

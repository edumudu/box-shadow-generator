import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../general-styles';

export const GlobalStyle = createGlobalStyle `
  body {
    background: ${colors.gradient.start};
    background:  linear-gradient(to right, ${colors.gradient.start}, ${colors.gradient.end}); 
    background:  -webkit-linear-gradient(to right, ${colors.gradient.start}, ${colors.gradient.end}); 
  }
`

export const MainContent = styled.main `
  flex: 1;
`

export const Card = styled.div `
  margin-top: 40px;
  border-radius: 20px 20px 0 0;
  min-height: 400px;
  background-color: #fff;
  min-height: calc(100vh - 80px);
  overflow: hidden;
`

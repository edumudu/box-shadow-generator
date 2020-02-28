import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  body {
    background: #ff8a65; 
    background:  linear-gradient(to right, #ff8a65, #ba68c8); 
    background:  -webkit-linear-gradient(to right, #ff8a65, #ba68c8); 
  }
`

export const MainContent = styled.main `
  flex: 1;
`

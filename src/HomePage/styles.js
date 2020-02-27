import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  body {
    background: #d9e3f0; 
    background: linear-gradient(to left, #d9e3f0, #ba68c8); 
    background: -webkit-linear-gradient(to left, #d9e3f0, #ba68c8);
  }
`

export const MainContent = styled.main `
  flex: 1;
`

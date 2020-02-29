import styled from 'styled-components'

export const Wrapper = styled.div `
  display: flex;

  @media screen and (max-width: 920px) {
    flex-direction: column;
    align-items: center;
  }
`

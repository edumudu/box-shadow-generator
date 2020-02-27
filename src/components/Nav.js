import styled from 'styled-components'

export default styled.nav `
  display: ${props => props.flex ? 'flex' : 'block'};
  justify-content: space-between;
  align-items: center;
`

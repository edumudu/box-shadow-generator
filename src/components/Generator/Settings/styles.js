import styled from 'styled-components'

export const SettingsTag = styled.div `
  flex: 1 1 35%;
  padding: 0 20px;
  padding-top: 40px;
  max-width: 395px;

  @media screen and (max-width: 920px) {
    max-width: 700px;
  }
`

export const Group = styled.div `
  margin: 8px 0;
  padding: 10px 5px;
  border-bottom: 1px solid #ccc;
`

export const Pre = styled.pre `
  padding: 0 !important;
  
  code { font-family: serif !important; }
`

export const IconWrapper = styled.div `
  text-align: right;
  color: #888;
  margin-bottom: 5px;

  i { 
    cursor: pointer;
    font-size: 1.3rem;
  }
`

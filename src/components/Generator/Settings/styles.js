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

export const Command = styled.div `
  padding: 15px;
  line-height: 24px;
  font-size: 0.85rem;
  border-radius: 15px;
  color: #ffffff;
  background-color: #2b2b2b;
  max-width: 100%;
  overflow: auto;
  white-space: nowrap;
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

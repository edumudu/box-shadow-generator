import styled from 'styled-components'

export const PreviewTag = styled.div `
  flex: 1 1 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bg};
  overflow-x: hidden;
  padding: 100px 0 80px;
`
export const PreviewElement = styled.div `
  width: 300px;
  height: 400px;
  padding: 50px 20px;
  color: ${props => props.box > '#999999' ? '#000000' : '#ffffff' };
  background-color: ${props => props.box};
  font-size: 0.9rem;
  -webkit-box-shadow: ${props => props.shadow.mode}
      ${props => 
      `${props.shadow.x}px 
       ${props.shadow.y}px 
       ${props.shadow.blur}px 
       ${props.shadow.length}px 
       ${props.shadow.rgba}`};
  -moz-box-shadow: ${props => props.shadow.mode}
    ${props => 
    `${props.shadow.x}px 
     ${props.shadow.y}px 
     ${props.shadow.blur}px 
     ${props.shadow.length}px 
     ${props.shadow.color}`};
  box-shadow: ${props => props.shadow.mode}
    ${props => 
    `${props.shadow.x}px 
     ${props.shadow.y}px 
     ${props.shadow.blur}px 
     ${props.shadow.length}px 
     ${props.shadow.color}`};
`

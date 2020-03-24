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

<<<<<<< HEAD
export const Pre = styled.pre `
  padding: 0 !important;
  
  code { font-family: serif !important; }
=======
export const Command = styled.pre `
  padding: 15px;
  line-height: 24px;
  font-size: 0.85rem;
  border-radius: 15px 15px 0 0;
  color: #ffffff;
  background-color: #2b2b2b;
  max-width: 100%;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 5px;  
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(190,190,190,0.6);
  }
>>>>>>> master
`

export const IconWrapper = styled.div `
  text-align: right;
  color: ${props => props.active ? '#e67e22' : '#888'};
  margin-bottom: 5px;

  > span { position: relative; }

  i { 
    cursor: pointer;
    font-size: 1.3rem;
    transition: color 0.1s;

    &:active {
      color: orange;
      transform: scale(0.8);
    }
  }
`

export const CopiedMessage = styled.div `
  position: absolute;
  top: calc(-100% - 40px);
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  padding: 10px 15px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 10px;
    height: 10px;
    transform: translateX(-50%) rotate(45deg);
    box-shadow: 5px 5px 5px #ccc;
    background-color: #fff;
  }
`

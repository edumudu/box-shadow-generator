import styled from 'styled-components';
import { colors } from '../../general-styles';

export const Switch = styled.label `
  display: flex;
  heigth: 20px;
  justify-content: center;
  align-items: center;
`

export const Trigger = styled.span `
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  line-height: 20px;
  margin: 0 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: ${props => props.active ? 'calc(100% - 17px)' : '2px'};
    transform: translateY(-50%);
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.active ? colors.gradient.start : colors.gradient.end };
    transition: left 0.4s;
  }
`

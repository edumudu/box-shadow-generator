import styled from 'styled-components';

import { colors } from '../../../general-styles';

export interface TriggerProps {
  active: boolean;
}

export interface InputProps {
  type: string;
}

export const Switch = styled.label`
  display: flex;
  heigth: 20px;
  justify-content: center;
  align-items: center;
`;

export const Trigger = styled.span<TriggerProps>`
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
    left: ${({ active }) => (active ? 'calc(100% - 17px)' : '2px')};
    transform: translateY(-50%);
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${({ active }) => (active ? colors.gradient.start : colors.gradient.end)};
    transition: left 0.4s;
  }
`;

const displayNoneTypes = ['color', 'checkbox'];

export const Input = styled.input<InputProps>`
  width: 100%;
  display: ${props => (displayNoneTypes.includes(props.type) ? 'none' : 'inline-block')};
`;

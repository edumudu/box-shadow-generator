import styled from 'styled-components';

export interface InputProps {
  type: string;
}

const displayNoneTypes = ['color', 'checkbox'];

export const Group = styled.div`
  margin: 8px 0;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  display: ${props => (displayNoneTypes.includes(props.type) ? 'none' : 'inline-block')};
`;

export const Range = styled.input`
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  width: 100%;
  outline: none;
  opacity: 0.7;
  background-color: #d3d3d3;
  border-radius: 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2f3542;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #2f3542;
    cursor: pointer;
  }
`;

export const InputHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

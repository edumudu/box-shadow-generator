import styled from 'styled-components';

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

export const ValueBox = styled.input`
  position: relative;
  width: 40px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 3px 5px;
  text-align: center;
  outline: none;
`;

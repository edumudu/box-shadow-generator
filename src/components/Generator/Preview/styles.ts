import styled from 'styled-components';

export interface PreviewTagProps {
  background: string;
}

export interface PreviewElementProps {
  box: string;
  shadow: string;
}

export const PreviewTag = styled.div<PreviewTagProps>`
  flex: 1 1 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ background }) => background};
  overflow-x: hidden;
  padding: 100px 0 80px;
`;

export const PreviewElement = styled.div<PreviewElementProps>`
  width: 300px;
  height: 400px;
  padding: 50px 20px;
  color: ${({ box }) => (box > '#999999' ? '#000000' : '#ffffff')};
  background-color: ${({ box }) => box};
  font-size: 0.9rem;
  ${({ shadow }) => shadow}
`;

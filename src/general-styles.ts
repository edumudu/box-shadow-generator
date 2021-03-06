import styled from 'styled-components';

export const colors = {
  black: '#2b2b2b',
  white: '#ffffff',
  fuscosa: '#cc4477',
  gradient: {
    start: '#ba68c8',
    end: '#ff8a65',
  },
};

export const Container = styled.div`
  margin: 0 auto;
  width: 96%;
  max-width: 1180px;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

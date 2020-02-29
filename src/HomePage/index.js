import React from 'react';
import Header from '../components/Header/index'
import Generator from '../components/Generator/index'
import { Container, colors } from '../general-styles';
import { MainContent, GlobalStyle, Card } from './styles'


function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Header bg={colors.white} />

      <MainContent>
        <Container>
          <Card>
            <Generator />
          </Card>
        </Container>
      </MainContent>
    </>
  );
}

export default HomePage;

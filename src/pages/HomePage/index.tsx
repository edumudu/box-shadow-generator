import React from 'react';

import Header from '../../components/Header';
import Generator from '../../components/Generator';
import { BoxShadowProvider } from '../../contexts/BoxShadowContext';

import { Container, colors } from '../../general-styles';
import { MainContent, GlobalStyle, Card } from './styles';

const HomePage = () => (
  <BoxShadowProvider>
    <GlobalStyle />
    <Header bg={colors.white} />

    <MainContent>
      <Container>
        <Card>
          <Generator />
        </Card>
      </Container>
    </MainContent>
  </BoxShadowProvider>
);

export default HomePage;

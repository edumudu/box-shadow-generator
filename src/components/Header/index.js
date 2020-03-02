import React from 'react';
import { Container } from '../../general-styles'
import { HeaderTag, Logo, Button, Nav } from './styles';

const Header = ({ bg }) =>
    <HeaderTag bg={ bg }>
      <Container>
        <Nav flex>
          <Logo>Box Shadow Generator</Logo>

          <Button href="#">Donate</Button>
        </Nav>
      </Container>
    </HeaderTag>

export default Header;

import React from 'react';
import { Container } from '../../general-styles'
import { HeaderTag, Logo, Button, Nav } from './styles';

function Header(props) {
  return (
    <HeaderTag bg={props.bg}>
      <Container>
        <Nav flex>
          <Logo>Box Shadow Generator</Logo>

          <Button href="#">Donate</Button>
        </Nav>
      </Container>
    </HeaderTag>
  );
};

export default Header;

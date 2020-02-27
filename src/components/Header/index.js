import React from 'react';
import Nav from '../Nav'
import Button from '../Button'
import { Container } from '../../general-styles'
import { HeaderTag, Logo } from './styles';

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

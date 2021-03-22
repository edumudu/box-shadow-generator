import React from 'react';

import { Container } from '../../general-styles';
import { HeaderTag, Logo, Button, Nav } from './styles';

const Header = () => (
  <HeaderTag>
    <Container>
      <Nav>
        <Logo>Box Shadow Generator</Logo>

        <Button href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZAGXXY6JEQ5NE&source=url">
          Donate
        </Button>
      </Nav>
    </Container>
  </HeaderTag>
);

export default Header;

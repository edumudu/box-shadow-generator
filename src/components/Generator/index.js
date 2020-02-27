import React from 'react';
import Settings from './Settings/index';
import Preview from './Preview/index';
import { Wrapper } from './styles';

function Generator() {
  return (
    <Wrapper>
      <Settings />

      <Preview />
    </Wrapper>
  )
}

export default Generator;

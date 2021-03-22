import React from 'react';

import Settings from './Settings';
import Preview from './Preview';

import { Wrapper } from './styles';

const Generator = () => {
  return (
    <Wrapper>
      <Settings />

      <Preview />
    </Wrapper>
  );
};

export default Generator;

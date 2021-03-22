import React, { FC, useContext } from 'react';

import { PreviewTag, PreviewElement } from './styles';
import { BoxShadowContext } from '../../../contexts/BoxShadowContext';

const Preview: FC = () => {
  const { boxBackground, containerBackground, currentCssCommands } = useContext(BoxShadowContext);

  return (
    <PreviewTag background={containerBackground.rgba}>
      <PreviewElement box={boxBackground.rgba} shadow={currentCssCommands} />
    </PreviewTag>
  );
};

export default Preview;

import React, { FC, useContext } from 'react';

import { BoxShadowContext } from '../../../contexts/BoxShadowContext';

import { PreviewTag, PreviewElement } from './styles';

const Preview: FC = () => {
  const { boxBackground, containerBackground, currentCssCommands } = useContext(BoxShadowContext);

  const shadow = currentCssCommands.split(';')[0].split(':')[1].trim();

  return (
    <PreviewTag background={containerBackground.rgba}>
      <PreviewElement box={boxBackground.rgba} shadow={shadow} />
    </PreviewTag>
  );
};

export default Preview;

import React from 'react';
import { PreviewTag, PreviewElement } from './styles';

const Preview = ({data}) => 
  <PreviewTag bg={data.bg.rgba}>
    <PreviewElement
      box={data.box.rgba}
      shadow={data.shadow}
    />
  </PreviewTag>

export default Preview;

import React from 'react';
import { PreviewTag, PreviewElement } from './styles';

const Preview = ({data}) => 
  <PreviewTag bg={data.bg}>
    <PreviewElement
      box={data.box}
      shadow={data.shadow}
    />
  </PreviewTag>

export default Preview;

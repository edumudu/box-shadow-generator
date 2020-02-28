import React from 'react';
import { PreviewTag, PreviewElement, Command } from './styles';

function Preview(props) {
  const shadow = props.data.shadow;

  return (
    <PreviewTag bg={props.data.bg}>
      <PreviewElement
        box={props.data.box}
        shadow={shadow}
      />
    </PreviewTag>
  )
}

export default Preview;

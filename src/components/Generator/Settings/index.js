import React, { useState } from 'react';
import Prism from 'prismjs';
import Input from '../../Input/index';
import { SettingsTag, Group, Pre, IconWrapper } from './styles';

function Settings(props) {
  const [shadow, setShadow] = useState(props.data.shadow)

  function handleChangeShadow (value) {
    const newShadow = { ...shadow, ...value }
    setShadow(newShadow)
    props.changed({ shadow: newShadow })
  }

  function treatCommand() {
    let command = props.command
    command = Prism.highlight(command, Prism.languages.css, 'css');

    return {__html: command}
  }

  return (
    <SettingsTag>
      <Group>
        <Input
          type="range"
          name="Horizontal Length"
          min="-200"
          max="200"
          value={shadow.x}
          onChange={val => handleChangeShadow( { x: val } )}
        />

        <Input 
          type="range"
          name="Vertical Length"
          min="-200"
          max="200"
          value={shadow.y}
          onChange={val => handleChangeShadow( { y: val } )}
        />
      </Group>

      <Group>
        <Input
          type="range"
          name="Blur Radius"
          value={shadow.blur}
          min="0"
          max="200"
          onChange={val => handleChangeShadow( { blur: val } )}
        />

        <Input
          type="range"
          name="Spread Radius"
          value={shadow.length}
          min="-100"
          max="200"
          onChange={val => handleChangeShadow( { length: val } )}
        />

        <Input
          type="range"
          name="Opacity"
          value={shadow.alpha}
          min="0"
          max="1"
          step="0.01"
          onChange={val => handleChangeShadow( { alpha: val } )}
        />
      </Group>

      <Group>
        <Input 
          type="color" 
          name="Shadow color"
          value={shadow.hex}
          alpha={shadow.alpha}
          onChange={val => handleChangeShadow( { hex: val.color, alpha: val.alpha / 100 } )}
        />

        <Input 
          type="color" 
          name="Background color" 
          value={props.data.bg} 
          onChange={val => props.changed({ bg: val.color })} 
        />

        <Input 
          type="color" 
          name="Box color"
          value={props.data.box} 
          onChange={val => props.changed({ box: val.color })} 
        />
      </Group>

      <Group>
        <Input
          type="switch"
          name="Box color"
          disabled="Outline"
          active="Inset"
          onChange={val => handleChangeShadow({ mode: val })}
        />
      </Group>

      <Group>
        <IconWrapper>
          <i className="material-icons" onClick={() => props.onCopy()}>file_copy</i>
        </IconWrapper>

        <Pre>
          <code className="language-css" dangerouslySetInnerHTML={treatCommand()} />
        </Pre>
      </Group>
    </SettingsTag>
  )
}

export default Settings

import React, { useState } from 'react';
import Prism from 'prismjs';
import Input from '../../Input/index';
import { SettingsTag, Group, Command, IconWrapper, CopiedMessage } from './styles';

const Settings = props => {
  const [shadow, setShadow] = useState(props.shadow)
  const [copyActive, setCopyActive] = useState(false)

  function handleChangeShadow (value) {
    const newShadow = { ...shadow, ...value }
    setShadow(newShadow)
    props.changed({ shadow: newShadow })
  }

  function hadnleChangeColor(prop, val) {
    const newProp = { ...props[prop], hex: val.color, alpha: val.alpha}
    props.changed({ [prop]: newProp})
  }

  function handleCopy() {
    setCopyActive(true)
    window.clearTimeout(window.interval)
    window.interval = window.setTimeout(() => setCopyActive(false), 5000)
    props.onCopy()
  }

  function hightlighterCSS() {
    let command = Prism.highlight(props.command, Prism.languages.css, 'css')
    command = command.replace(/(;)/g, '; <br />')

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
          onChange={val => handleChangeShadow( { alpha: +val } )}
        />
      </Group>

      <Group>
        <Input 
          type="color" 
          name="Shadow color"
          value={shadow.hex}
          alpha={shadow.alpha}
          onChange={val => handleChangeShadow( { hex: val.color, alpha: val.alpha } )}
        />

        <Input 
          type="color" 
          name="Background color" 
          value={props.bg.hex}
          alpha={props.bg.alpha}
          onChange={val => hadnleChangeColor('bg', val)} 
        />

        <Input 
          type="color" 
          name="Box color"
          value={props.box.hex} 
          alpha={props.box.alpha}
          onChange={val => hadnleChangeColor('box', val)} 
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
        <IconWrapper active={copyActive}>
          <span>
            <i className="material-icons" onClick={handleCopy}>file_copy</i>

            { copyActive && <CopiedMessage>Copied</CopiedMessage> }
          </span>
        </IconWrapper>

        <Command>
          <code dangerouslySetInnerHTML={hightlighterCSS()} />
        </Command>
      </Group>
    </SettingsTag>
  )
}

export default Settings

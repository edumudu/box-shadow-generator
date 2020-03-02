import React, {useState} from 'react';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker'
import LabelSwitch from '../LabelSwitch/index';
import { Input, Group, Range, ValueBox, InputHead } from './styles';

function IsColor(props) {
  const [switchActive, setSwitchActive] = useState(false)

  function handlerChangeColor(obj) {
    props.onChange({ color: obj.color, alpha: obj.alpha / 100 })
  }

  function handlerSwitch(e) {
    const check = e.target.checked
    setSwitchActive(check)
    props.onChange( check ? 'inset' : '')
  }

  switch (props.type) {
    case 'color':

      return <Group>
        <InputHead>
          {props.name}
          <ColorPicker
            alpha={+props.alpha * 100}
            color={props.value}
            mode="HSB"
            onChange={obj => handlerChangeColor(obj)}
          >
            <span className="rc-color-picker-trigger" />
          </ColorPicker>
        </InputHead>
      </Group>
    case 'switch':
      const id = Math.random()

      return <Group>
        <Input
          id={id}
          type="checkbox"
          onChange={e => handlerSwitch(e) }
        />

        <LabelSwitch 
          on={props.active}
          off={props.disabled} 
          for={id}
          active={switchActive}
        />
      </Group>

    case 'range':
      return <Group>
        <InputHead>
          {props.name}

          <ValueBox
            type="text"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
          />
        </InputHead>

        <Range
          type={props.type}
          value={props.value}
          min={props.min}
          max={props.max}
          step={props.step}
          onChange={e => props.onChange(e.target.value)}
        />
      </Group>

    default:
      return <Group>
        <InputHead>
          {props.name}
        </InputHead>

        <Input type={props.type || 'text'} />
      </Group>
  }
}

function InputCompiler(props) {
  return (
    <>
      <IsColor 
        type={props.type}
        name={props.name}
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
        active={props.active}
        disabled={props.disabled}
        alpha={props.alpha}
        onChange={val => props.onChange(val)} 
      />
    </>
  )
}

export default InputCompiler

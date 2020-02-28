import React from 'react';
import InputHead from '../InputHead/index';
import { Input, Label, Group, Range } from './styles';

function IsColor(props) {
  switch (props.type) {
    case 'color':
      const id = Math.random();

      return <Group>
        <InputHead>
          {props.name}
          <Label for={id} type={props.type} />
        </InputHead>

        <Input id={id} type={props.type} onChange={() => alert('ola')} />
      </Group>
    case 'switch':

      return <Group>
        {/* <LabelSwitch on={props.active} off={props.disabled}></LabelSwitch> */}
        <Input type="checkbox" />
      </Group>

    case 'range':
      return <Group>
        <InputHead>
          {props.name}
        </InputHead>

        <Range type={props.type} />
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
      <IsColor type={props.type} name={props.name} />
    </>
  )
}

export default InputCompiler

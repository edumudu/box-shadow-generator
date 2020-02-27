import React from 'react';
import InputHead from '../InputHead/index';
import { Input, Label, Group } from './styles';

function IsColor(props) {
  switch (props.type) {
    case 'color':
      const id = Math.random();

      return <Group>
        <Label for={id} type={props.type} >{props.name}</Label>

        <Input id={id} type={props.type} />
      </Group>
    case 'switch':

      return <Group>
        <Input type="checkbox" />
      </Group>

    default:
      return <Group>
        <InputHead content={props.name} />

        <Input type={props.type || 'range'} />
      </Group>
  }
}

function Range(props) {
  return (
    <>
      <IsColor type={props.type} name={props.name} />
    </>
  )
}

export default Range

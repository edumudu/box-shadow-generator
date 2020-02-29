import React from 'react'
import { Switch, Trigger } from './styles'

function LabelSwitch(props) {
  return (
    <Switch htmlFor={props.for}>
      <span>{props.off}</span>
      <Trigger active={props.active} />
      <span>{props.on}</span>
    </Switch>
  )
}

export default LabelSwitch

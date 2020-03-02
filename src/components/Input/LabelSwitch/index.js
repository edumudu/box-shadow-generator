import React from 'react'
import { Switch, Trigger } from './styles'

const LabelSwitch = props => 
  <Switch htmlFor={props.for}>
    <span>{props.off}</span>
    <Trigger active={props.active} />
    <span>{props.on}</span>
  </Switch>

export default LabelSwitch

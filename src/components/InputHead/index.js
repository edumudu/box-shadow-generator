import React from 'react'
import { InputHeadTag } from './styles'

function InputHead(props) {
  return (
    <InputHeadTag>
      {props.children}
    </InputHeadTag>
  )
}

export default InputHead

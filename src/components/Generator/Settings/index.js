import React from 'react'
import Input from '../../Input/index'
import { SettingsTag, Group } from './styles'

function Settings() {

  return (
    <SettingsTag>
      <Group>
        <Input type="range" name="Horizontal Length" />

        <Input type="range" name="Vertical Length" />
      </Group>

      <Group>
        <Input type="range" name="Blur Radius" />

        <Input type="range" name="Spread Radius" />

        <Input type="range" name="Opacity" />
      </Group>

      <Group>
        <Input type="color" name="Shadow color" onChange={() => alert('dsa')} min="0"/>

        <Input type="color" name="Background color" />

        <Input type="color" name="Box color" />
      </Group>

      <Group>
        <Input type="switch" name="Box color" />
      </Group>
    </SettingsTag>
  )
}

export default Settings

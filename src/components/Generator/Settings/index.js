import React from 'react'
import Input from '../../Input/index'
import { SettingsTag, Group } from './styles'

function Settings() {
  return (
    <SettingsTag>
      <Group>
        <Input name="Horizontal Length" />

        <Input name="Vertical Length" />
      </Group>

      <Group>
        <Input name="Blur Radius" />

        <Input name="Spread Radius" />

        <Input name="Opacity" />
      </Group>

      <Group>
        <Input type="color" name="Shadow color" />

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

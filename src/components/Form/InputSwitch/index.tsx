import React, { FC } from 'react';

import { BaseInput } from '../BaseInput';
import { Switch, Trigger, TriggerProps, Input } from './styles';

export interface LabelSwitchProps {
  active: TriggerProps['active'];
  on: string;
  off: string;
  onChange: (isChecked: boolean) => void;
}

export const InputSwitch: FC<LabelSwitchProps> = ({ active, on, off, onChange }) => {
  const id = String(Math.random());

  return (
    <BaseInput>
      <Input id={id} type="checkbox" onChange={e => onChange(e.target.checked)} />

      <Switch htmlFor={id}>
        <span>{off}</span>

        <Trigger active={active} />

        <span>{on}</span>
      </Switch>
    </BaseInput>
  );
};

import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
/// @ts-ignore
import { BaseInput, BaseInputProps } from '../BaseInput';
import { InputHead } from '../BaseInput/styles';
import { Range, ValueBox } from './styles';

import 'rc-color-picker/assets/index.css';

export interface InputColorProps extends BaseInputProps {
  name: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}

export function InputRange({ name, onChange, value, min, max, step }: InputColorProps) {
  return (
    <BaseInput>
      <InputHead>
        {name}

        <ValueBox type="text" value={value} onChange={e => onChange(Number(e.target.value))} />
      </InputHead>

      <Range
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={e => onChange(Number(e.target.value))}
      />
    </BaseInput>
  );
}

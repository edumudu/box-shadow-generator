import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
/// @ts-ignore
import ColorPicker from 'rc-color-picker';

import { BaseInput, BaseInputProps } from '../BaseInput';
import { InputHead } from '../BaseInput/styles';

import 'rc-color-picker/assets/index.css';

export interface InputColorProps extends BaseInputProps {
  name: string;
  value: string;
  alpha: number;
  onChange: ({ color, alpha }: { color: string; alpha: number }) => void;
}

export function InputColor({ name, onChange, alpha, value }: InputColorProps) {
  return (
    <BaseInput>
      <InputHead>
        {name}

        <ColorPicker
          alpha={alpha}
          color={value}
          mode="HSB"
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          /// @ts-ignore
          onChange={obj => onChange(obj)}
        >
          <span className="rc-color-picker-trigger" />
        </ColorPicker>
      </InputHead>
    </BaseInput>
  );
}

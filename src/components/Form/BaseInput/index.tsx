import React, { FC } from 'react';

import { Group } from './styles';

export interface BaseInputProps {
  name?: string;
  active?: string;
}

export const BaseInput: FC<BaseInputProps> = ({ children }) => {
  return <Group>{children}</Group>;
};
